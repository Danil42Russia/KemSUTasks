-- 1. Свяжите таблицы и выведите:
-- 1.1. отчет, содержащий фамилию, номер отдела и название отдела для каждого сотрудника.
SELECT EMP.LAST_NAME AS LAST_NAME, DEPT.ID AS DEPT_ID, DEPT.NAME AS DEPT_NAME
FROM S_EMP EMP
     JOIN S_DEPT DEPT ON EMP.DEPT_ID = DEPT.ID;

-- 1.2. отчет, содержащий фамилию, название отдела и название региона для всех сотрудников, получающих комиссионные.
SELECT EMP.LAST_NAME AS LAST_NAME, DEPT.NAME AS DEPT_NAME, REGION.NAME AS REGION_NAME
FROM S_EMP EMP
     JOIN S_DEPT DEPT ON EMP.DEPT_ID = DEPT.ID
     JOIN S_REGION REGION ON DEPT.REGION_ID = REGION.ID
WHERE COMMISSION_PCT IS NOT NULL;

-- 2. Свяжите таблицы и выведите фамилию и название отдела для сотрудника по фамилии “Smith”.
SELECT EMP.LAST_NAME, DEP.NAME AS DEP_NAME
FROM S_EMP EMP
     JOIN S_DEPT DEP ON EMP.DEPT_ID = DEP.ID
WHERE EMP.LAST_NAME = 'Smith';

-- 3. Свяжите таблицы и выведите наименование товара, номера товара и заказанное количество по всем позициям заказа номер 106.
SELECT PRODUCT.NAME AS PRODUCT_NAME, PRODUCT.ID AS PRODUCT_ID, ITEM.QUANTITY AS ITEMS_QUANTITY
FROM S_PRODUCT PRODUCT
     JOIN S_ITEM ITEM ON PRODUCT.ID = ITEM.PRODUCT_ID
     JOIN S_ORD ORD ON ITEM.ORD_ID = ORD.ID
WHERE ORD.ID = 106;

-- 4. Для всех заказчиков и всех их заказов выведите номер заказчика, его наименование и номер заказа.
-- Даже если клиент не делал заказ, его номер и наименование должны быть включены в список.
SELECT CUSTOMER.ID AS CUSTOMER_ID, CUSTOMER.NAME AS CUSTOMER_NAME, ORD.ID AS ORD_ID
FROM S_CUSTOMER CUSTOMER
     LEFT JOIN S_ORD ORD ON CUSTOMER.ID = ORD.CUSTOMER_ID;

-- 5. Выведите фамилии и номера всех сотрудников вместе с фамилиями и номерами их менеджеров.
SELECT EMP.LAST_NAME AS EMPLOYER_NAME, EMP.ID AS EMPLOYER_ID, MAN.LAST_NAME AS MANAGER_NAME, MAN.ID AS MANAGER_ID
FROM S_EMP EMP
     JOIN S_EMP MAN ON EMP.MANAGER_ID = MAN.ID;

-- 6. Для каждого заказчика, общая сумма заказа которого превышает 100 000,
-- выведите наименование заказчика, заказанные им товары, их количество.
SELECT CUSTOMER.NAME AS CUSTOMER_NAME, PRODUCT.NAME AS PRODUCT_NAME, ITEM.QUANTITY AS ITEM_QUANTITY
FROM S_ORD ORD
     JOIN S_CUSTOMER CUSTOMER ON ORD.CUSTOMER_ID = CUSTOMER.ID
     JOIN S_ITEM ITEM ON ITEM.ORD_ID = ORD.ID
     JOIN S_PRODUCT PRODUCT ON ITEM.PRODUCT_ID = PRODUCT.ID
WHERE ORD.TOTAL >= 100000;

-- 7. Получите список номеров и названий всех регионов с указанием количества отделов в каждом регионе.
SELECT REGION.ID AS REGION_ID, REGION.NAME AS REGION_NAME, COUNT(DEPT.ID) AS DEPT_COUNT
FROM S_REGION REGION
     JOIN S_DEPT DEPT ON DEPT.REGION_ID = REGION.ID
GROUP BY REGION.ID, REGION.NAME;

-- 8. Выведите наименование каждого клиента и количество сделанных им заказов.
SELECT CUSTOMER.NAME AS CUSTOMER_NAME, COUNT(ORD.ID) AS ORD_COUNT
FROM S_CUSTOMER CUSTOMER
     JOIN S_ORD ORD ON ORD.CUSTOMER_ID = CUSTOMER.ID
GROUP BY CUSTOMER.NAME;

-- 9. Для каждого вида товара, заказанного, по крайней мере, три раза, выведите название этого товара и количество заказов на него.
-- TODO: чо за вид?

-- 10. Для каждого заказа с общим количеством заказанных товаров 100 или более выведите номер заказа и общее количество заказанных товаров в нем.
-- Если, например, заказ номер 99 содержит заказ на один товар в количестве 30,
-- а на другой – в количестве 75, то общее количество заказанных товаров равно 105.
SELECT ORD.ID AS ORD_ID, SUM(ITEM.QUANTITY) AS QUANTITY_SUM
FROM S_ORD ORD
     JOIN S_ITEM ITEM ON ITEM.ORD_ID = ORD.ID
HAVING SUM(ITEM.QUANTITY) >= 100
GROUP BY ORD.ID;
