-- 1. Создайте таблицу DEPARTMENT на основе следующего бланка экземпляра таблицы. Убедитесь в том, что таблица создана.
CREATE TABLE DEPARTMENT
(
    ID   NUMBER(7) NOT NULL,
    NAME VARCHAR2(25),

    CONSTRAINT "DEPARTMENT_PK" PRIMARY KEY (ID)
);

-- 2. Создайте таблицу EMPLOYEE на основе следующего бланка экземпляра таблицы. Убедитесь в том, что таблица создана.
CREATE TABLE EMPLOYEE
(
    ID         NUMBER(7) NOT NULL,
    LAST_NAME  VARCHAR2(25),
    FIRST_NAME VARCHAR2(25),
    DEPT_ID    NUMBER(7),

    CONSTRAINT "EMPLOYEE_PK" PRIMARY KEY (ID),
    CONSTRAINT "EMPLOYEE_KF1" FOREIGN KEY (DEPT_ID) REFERENCES DEPARTMENT (ID)
);

-- 3. Добавьте в таблицу DEPARTMENT следующие строки:
INSERT INTO DEPARTMENT (NAME, ID)
VALUES ('Marketing', 37);

INSERT INTO DEPARTMENT (NAME, ID)
VALUES ('Sales', 54);

INSERT INTO DEPARTMENT (NAME, ID)
VALUES ('Personnel', 75);

-- 4.Добавьте в таблицу EMPLOYEE в каждый из созданных отделов по одному сотруднику.
INSERT INTO EMPLOYEE(ID, LAST_NAME, FIRST_NAME, DEPT_ID)
VALUES (12, 'Petrov', 'Alexey', 37);

INSERT INTO EMPLOYEE(ID, LAST_NAME, FIRST_NAME, DEPT_ID)
VALUES (15, 'Sedov', 'Sergey', 75);

INSERT INTO EMPLOYEE(ID, LAST_NAME, FIRST_NAME, DEPT_ID)
VALUES (23, 'Mikhailova', 'Milana', 54);

-- 5. Сделайте эти добавления данных постоянными (зафиксируйте транзакцию).
COMMIT;
