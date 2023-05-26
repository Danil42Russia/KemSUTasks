import itertools
import math
import textwrap


def parse_net(net: str) -> tuple[str, int]:
    """Делит на сеть на адрес и префикс"""
    ip, mask = net.split("/")

    return ip, int(mask)


def ip_to_bin(ip: str) -> str:
    """Конвертирует ip в бинарный вид

    >>> ip_to_bin("10.0.0.0")     # 00001010000000000000000000000000
    >>> ip_to_bin("192.168.1.0")  # 11000000101010000000000100000000
    """
    octets = [int(octet) for octet in ip.split(".")]
    assert len(octets) == 4, "Неверное количество октетов"

    octets = [bin(octet + 256) for octet in octets]
    octets = [str(octet)[3:] for octet in octets]

    bin_ip = "".join(octets)
    assert len(bin_ip) == 32, "Ошибка при вычисление бинарного вида ip"

    return bin_ip


def bin_to_ip(binstr: str) -> str:
    """Конвертирует ip из бинарного вида

    >>> ip_to_bin("00001010000000000000000000000000") # 10.0.0.0
    >>> ip_to_bin("11000000101010000000000100000000") # 192.168.1.0
    """
    assert len(binstr) == 32, "Неверный вид бинарного ip"

    bin_list = textwrap.wrap(binstr, 8)
    assert len(bin_list) == 4, "Ошибка при разделение на октеты"

    bin_list = [str(int(octet, 2)) for octet in bin_list]
    return ".".join(bin_list)


def prefix_to_bin(prefix: int) -> str:
    """Переводит префикс маски в двоичную запись

    >>> prefix_to_bin(0)   # 00000000000000000000000000000000
    >>> prefix_to_bin(16)  # 11111111111111110000000000000000
    >>> prefix_to_bin(32)  # 11111111111111111111111111111111
    """
    assert 0 <= prefix <= 32, f"Префикс {prefix} вышел из зоны значений [0-32]"

    min_mask = "0" * 32
    return min_mask.replace("0", "1", prefix)


def count_ip_address_by_prefix(prefix: int) -> int:
    """Количество ip адресов по префиксу маски подсети"""
    assert 0 <= prefix <= 32, f"Префикс {prefix} вышел из зоны значений [0-32]"
    max_prefix = 32

    return 2 ** (max_prefix - prefix)


def next_pow2(number: int) -> int:
    """Округляет число до ближайшего числа, которое является степенью двойки"""
    power = 1
    while power < number:
        power *= 2
    return power


def subnet_count_to_bit(subnets_count: int) -> int:
    """Высчитывает сколько нужно занять бит от хоста"""
    res = math.log2(subnets_count)
    assert int(res) == res, "Что-то не так с количеством"

    return int(res)


def split_subnet(subnet: str, subnets_count: int) -> list[str]:
    network = parse_net(subnet)

    old_prefix = network[1]
    bit_count = subnet_count_to_bit(subnets_count)
    new_prefix = old_prefix + bit_count

    address_bin = ip_to_bin(network[0])

    new_subnet: list[str] = []
    for bit_variant in itertools.product("01", repeat=bit_count):
        # Делаем замену в битах
        new_address = address_bin[:old_prefix] + "".join(bit_variant) + address_bin[new_prefix:]

        new_subnet.append(f"{bin_to_ip(new_address)}/{new_prefix}")

    assert len(new_subnet) == subnets_count, "Ошибка при разбитие подсети"
    return new_subnet


def vlsm(network: str, required_subnets: dict[str, int]) -> tuple[dict, dict, dict]:
    source_network = parse_net(network)
    count_source_network = count_ip_address_by_prefix(source_network[1])

    # Размер для подсети
    required_subnets_size = {name: (size + 2) for name, size in required_subnets.items()}

    # Выделенный размер
    selected_subnets_size = {name: next_pow2(size) for name, size in required_subnets_size.items()}

    ready_subnets: dict[str, str] = {}
    unshared_subnets: list[tuple[str, int]] = []
    free_subnets: dict[int, list[str]] = {}

    # Группируем по выделенному размеру на подсесть
    grouped_selected_subnets: dict[int, list[str]] = {}
    for key, value in selected_subnets_size.items():
        grouped_selected_subnets.setdefault(value, []).append(key)

    subnet_bits: dict[int, int] = {}
    grouped_selected_subnets_size = list(sorted(grouped_selected_subnets.keys(), reverse=True))

    split_subnet_size = count_source_network  # количество ip адресов в подсети которую мы будем разбивать
    this_split_subnet = network  # подсеть которую мы будем разбивать
    for subnet_size in grouped_selected_subnets_size:
        # количество новых подсетей которые получатся при разбитии
        new_bits = int(split_subnet_size / subnet_size)
        # количество ip адресов которые остались
        split_subnet_size = subnet_size

        # Новые подсети которые получи при разбивание
        split_subnets = split_subnet(this_split_subnet, new_bits)
        subnet_bits[subnet_size] = new_bits

        # Первые части отдаём подсетям для которых делали разделение
        for subnets_name in grouped_selected_subnets[subnet_size]:
            if len(split_subnets) == 0:
                unshared_subnets.append((subnets_name, subnet_size))
                continue

            # Если при разделение на подсети у нас есть свободные подсети, то забираем их
            ready_subnets[subnets_name] = split_subnets.pop(0)

            # Если что-то остаётся при разделении, то забираем для следующей подсети
            if len(split_subnets) != 0:
                this_split_subnet = split_subnets.pop(0)

            # Свободные подсети, которые остались при разделение
            free_subnets[subnet_size] = split_subnets

    # Если у нас нет свободных подсетей, то идём к предыдущей подсети по размеру и пытаемся поделить её
    # ВНИМАНИЕ: делает это он, не оптимально, при данном подходе остаются "дырки" в подсетях.
    # Скорее всего надо делить все предыдущие, подсети до размера подсети для которой делается разделение
    # находить самое ближайшее к уже разделённым.
    # И потом возвращать разделённые подсети в прежнее до разделения состояние
    for subnets_name, subnet_size in unshared_subnets:
        repeat_count, repeat_subnet = 0, []
        for selected_subnet_size in reversed(grouped_selected_subnets_size):
            repeat_subnet.append(selected_subnet_size)
            if len(free_subnets[selected_subnet_size]) != 0:
                break
            repeat_count += 1

        repeat_subnet.reverse()
        for i in range(repeat_count):
            first_free_subnet = free_subnets[repeat_subnet[i]].pop(0)
            bits = subnet_bits[repeat_subnet[i + 1]]
            free_subnets[repeat_subnet[i + 1]] = split_subnet(first_free_subnet, bits)

        ready_subnets[subnets_name] = free_subnets[subnet_size].pop(0)

    free_subnets[split_subnet_size].append(this_split_subnet)
    return ready_subnets, free_subnets, selected_subnets_size


def main() -> None:
    network = "192.168.128.0/19"
    required_subnets: dict[str, int] = {
        "net1": 10,
        "net2": 17,
        "net3": 526,
        "net4": 58,
        "net5": 3156,
    }

    print("|{:^74}|".format("Разбиение подсети:"))
    ready_template = "|{:^10}|{:^10}|{:^20}|{:^20}|{:^10}|"
    print(ready_template.format("Название", "Размер", "Выделенный размер", "Адрес", "Маска"))

    ready_subnets, free_subnets, subnets_size = vlsm(network, required_subnets)
    for subnet_name, subnet_size in required_subnets.items():
        selected_subnet_size = subnets_size[subnet_name]
        new_address, new_prefix = parse_net(ready_subnets[subnet_name])

        print(ready_template.format(subnet_name, subnet_size, selected_subnet_size, new_address, f"/{new_prefix}"))
    print()

    print("|{:^31}|".format("Свободные подсети:"))
    free_template = "|{:^20}|{:^10}|"
    print(free_template.format("Адрес", "Маска"))

    for free_subnet in list(itertools.chain(*free_subnets.values())):
        address, prefix = parse_net(free_subnet)
        print(free_template.format(address, prefix))


if __name__ == "__main__":
    main()
