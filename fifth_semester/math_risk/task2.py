import typing
import random

N = 100000  # Количество испытаний
BASIC_PRICE = 12  # Затраты предприятия на выпуск одной полки


def get_random(a: int, b: int) -> int:
    r = random.random()
    return int(a + (b + 1 - a) * r)


def work_imitation(number_tests: int, min_shelves: int, max_shelves: int,
                   fun_calculation: typing.Callable[[int], float]) -> float:
    """
    Имитация работ
    """
    order_amount = 0
    for _ in range(number_tests):
        x = get_random(min_shelves, max_shelves)
        order_amount += fun_calculation(x)

    return order_amount / number_tests


def calculate_profit_with_discount(x: int) -> float:
    """
    Расчёт работы с использованием скидок
    """
    if x > 10:
        price = 20
    else:
        price = 25

    return (price - BASIC_PRICE) * x


def calculate_profit_without_discount(x: int) -> float:
    """
    Расчёт работы без использования скидок
    """
    return (25 - BASIC_PRICE) * x


average_profit_with_discount = work_imitation(N, 1, 40, calculate_profit_with_discount)
average_profit_without_discount = work_imitation(N, 1, 20, calculate_profit_without_discount)

print(f"Средняя прибыль от выполнения заказа без скидок: {average_profit_with_discount:.3f} у.е")
print(f"Средняя прибыль от выполнения заказа с использованием скидок: {average_profit_without_discount:.3f} у.е")
print()

if average_profit_with_discount > average_profit_without_discount:
    difference_profit = average_profit_with_discount - average_profit_without_discount
    difference_profit_percentage = 100 * difference_profit / average_profit_with_discount

    print(f"Переходить на систему без скидок не выгодно. Прибыль упадет на: {difference_profit_percentage:.3f}%")
else:
    print("Переходить на систему без скидок выгодно")
