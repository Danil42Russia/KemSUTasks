-- 1. Выведите номер сотрудника фирмы, его фамилию и должность в скобках, заработную плату, повышенную на 15 % и округленную до целого.
SELECT ID,
       LAST_NAME || ' (' || TITLE || ')' AS LAST_NAME_AND_TITLE,
       ROUND(SALARY)                     AS SALARY,
       ROUND(SALARY + (SALARY * 0.15))   AS INCREASED_SALARY
FROM S_EMP;

-- 2. Выведите все наименования заказчиков, содержащие слово “sport”, вне зависимости от регистра.
SELECT NAME
FROM S_CUSTOMER
WHERE LOWER(NAME) LIKE '%sport%';

-- 3. Выполните упражнения, используя таблицу S_PRODUCT.
-- 3.1 Перечислите в алфавитном порядке все товары, названия которых начинаются с “Pro”.
SELECT NAME
FROM S_PRODUCT
WHERE NAME LIKE 'Pro%'
ORDER BY NAME;

-- 3.2 Выведите названия и краткие описания всех продуктов, в описании которых содержится слово “ski”, вне зависимости от регистра.
SELECT NAME, SHORT_DESC
FROM S_PRODUCT
WHERE LOWER(SHORT_DESC) LIKE '%ski%';

-- 4. Выполните следующие действия, пользуясь таблицей S_CUSTOMER.
-- 4.1 Создайте запрос для вывода названия, номера и кредитного рейтинга всех фирм-клиентов, имеющих торгового представителя под номером 11.
SELECT NAME, ID, PHONE, CREDIT_RATING
FROM S_CUSTOMER
WHERE SALES_REP_ID = 11;

-- 4.2 Измените команду присвоив столбцам заголовки Company, Company ID, Rating. Выполните запрос еще раз.
SELECT NAME AS COMPANY, ID AS COMPANY_ID, PHONE, CREDIT_RATING AS RATING
FROM S_CUSTOMER
WHERE SALES_REP_ID = 11;

-- 5 Выполните следующие упражнения с таблицей S_EMP.
-- 5.1 Покажите структуру таблицы.
-- DESCRIBE S_EMP;

-- 5.2 Получите список имен, фамилий и номеров отделов для сотрудников отделов 10 и 50.
-- Отсортируйте список по фамилиям в алфавитном порядке. Объедините имя с фамилией и назовите столбец “Employees”.
SELECT FIRST_NAME || ' ' || LAST_NAME AS EMPLOYEES, DEPT_ID
FROM S_EMP
WHERE DEPT_ID IN (10, 50)
ORDER BY LAST_NAME;

-- 5.3 Выведете имя пользователя и дату начала работы всех сотрудников, нанятых между 14 мая 1990 года и 26 мая 1991 года.
-- Результаты запроса отсортируйте по убыванию дат начала работы.
SELECT FIRST_NAME, START_DATE
FROM S_EMP
WHERE START_DATE BETWEEN TO_DATE('14.05.1990', 'DD.MM.YYYY') AND TO_DATE('26.05.1991', 'DD.MM.YYYY')
ORDER BY START_DATE DESC;

-- 5.4 Получите список фамилий и заработной платы всех сотрудников отделов 31, 42, и 50, месячный заработок которых не лежит в интервале от 1000 до 2500.
-- Назовите столбец “Employee Name”, а столбец заработной платы – “MONTHLY SALARY”.
SELECT LAST_NAME AS "EMPLOYEE NAME", SALARY AS "MONTHLY SALARY"
FROM S_EMP
WHERE DEPT_ID IN (31, 42, 50)
  AND SALARY NOT BETWEEN 1000 AND 2500;

-- 6. Составьте запрос для получения следующей информации по каждому сотруднику: <имя сотрудника> зарабатывает <зарплата> в месяц, но желает <утроенная зарплата>.
-- Например: ALLEN зарабатывает 1100 в месяц, но желает 3300.
SELECT FIRST_NAME || ' зарабатывает ' || SALARY || ' в месяц, но желает ' || (SALARY * 3) || '.' AS MESSAGE
FROM S_EMP;

-- 7. Для каждого сотрудника выведите фамилию, вычислите количество месяцев со дня начала работы до настоящего времени, день недели, когда он был нанят на работу.
-- Результаты отсортируйте по количеству отработанных месяцев. Количество месяцев округлите до целого.
SELECT LAST_NAME, ROUND(MONTHS_BETWEEN(SYSDATE, START_DATE)) AS MONTHS, TO_CHAR(START_DATE, 'DAY')
FROM S_EMP
ORDER BY MONTHS;

-- 8.Для каждого сотрудника выведите фамилию, дату найма и дату пересмотра зарплаты, которая приходится на первый понедельник после шести месяцев работы.
-- Формат даты на выводе: «день.месяц.год», например 12.01.2012.
SELECT LAST_NAME,
       TO_CHAR(START_DATE, 'DD.MM.YYYY')                             AS START_DATE,
       TO_CHAR(TRUNC(ADD_MONTHS(START_DATE, 6), 'IW'), 'DD.MM.YYYY') AS REVISION_DATE
FROM S_EMP;
