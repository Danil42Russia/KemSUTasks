-- 1. Выведите наибольшую и наименьшую общую сумму заказа из таблицы S_ORD.
SELECT MAX(TOTAL) AS MAX, MIN(TOTAL) AS MIN
FROM S_ORD;

-- 2. Составьте запрос для вывода минимальной и максимальной заработной платы по всем должностям в алфавитном порядке.
SELECT MIN(SALARY) AS MIN, MAX(SALARY) AS MAX, TITLE
FROM S_EMP
GROUP BY TITLE
ORDER BY TITLE;

-- 3. Определите количество менеджеров без вывода информации о них.
SELECT COUNT(DISTINCT MANAGER_ID) AS MANAGER_COUNT
FROM S_EMP;

-- 4. Выведите номер каждого заказа и количество позиций в нем. Столбец с количеством позиций озаглавьте “Number of Items”.
SELECT ORD_ID, COUNT(ORD_ID) AS ORD_COUNT
FROM S_ITEM
GROUP BY ORD_ID;

-- 5. Выведите номер каждого менеджера и заработную плату самого низкооплачиваемого из его подчиненных.
-- Исключите группы с минимальной заработной платой менее 1000. Отсортируйте результаты по размеру заработной платы.
SELECT MANAGER_ID, MIN(SALARY) AS MIN_SALARY
FROM S_EMP
WHERE MANAGER_ID IS NOT NULL
GROUP BY MANAGER_ID
HAVING MIN(SALARY) <= 1000
ORDER BY MIN_SALARY;

-- 6. Выведите разницу между самой высокой и самой низкой заработной платой.
SELECT MAX(SALARY) - MIN(SALARY) AS DIFF_SALARY
FROM S_EMP;

-- 7. Для каждого вида товара, заказанного, по крайней мере, три раза, выведите номер этого товара и количество заказов на него.
-- Столбец с количеством заказов на товар озаглавьте “Times Ordered”. Отсортируйте данные по номерам заказанных товаров.
SELECT PRODUCT_ID, COUNT(PRODUCT_ID) AS TIMES_ORDERED
FROM S_ITEM
HAVING COUNT(PRODUCT_ID) >= 3
GROUP BY PRODUCT_ID
ORDER BY PRODUCT_ID;

-- 8. Получите список номеров всех регионов с указанием количества отделов в каждом регионе.
SELECT REGION_ID, COUNT(ID) AS DEPT_COUNT
FROM S_DEPT
GROUP BY REGION_ID;

-- 9. Выведите номер каждого клиента и количество сделанных им заказов.
SELECT CUSTOMER_ID, COUNT(ID) AS ORD_COUNT
FROM S_ORD
GROUP BY CUSTOMER_ID;

-- 10. Используя однострочные и групповые функции, определите количество принятых сотрудников по годам.
-- Вид: 1991 (год) --- 10 человек
--      1992 (год) --- 5 человек
--      и т.д.
SELECT TO_CHAR(START_DATE, 'YYYY') || ' (год) --- ' || COUNT(ID) || ' человек' AS MESSAGE
FROM S_EMP
GROUP BY TO_CHAR(START_DATE, 'YYYY');
