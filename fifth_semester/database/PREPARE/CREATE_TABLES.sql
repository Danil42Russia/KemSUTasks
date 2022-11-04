CREATE TABLE S_CUSTOMER
(
    ID            NUMBER(7),
    NAME          VARCHAR2(50),
    PHONE         VARCHAR2(25),
    ADDRESS       VARCHAR2(400),
    CITY          VARCHAR2(30),
    STATE         VARCHAR2(20),
    COUNTRY       VARCHAR2(30),
    ZIP_CODE      VARCHAR2(75),
    CREDIT_RATING VARCHAR2(9),
    SALES_REP_ID  NUMBER(7),
    REGION_ID     NUMBER(7),
    COMMENTS      VARCHAR2(255)
);

CREATE TABLE S_DEPT
(
    ID        NUMBER(7),
    NAME      VARCHAR2(25),
    REGION_ID NUMBER(7)
);

CREATE TABLE S_EMP
(
    ID             NUMBER(7),
    LAST_NAME      VARCHAR2(25),
    FIRST_NAME     VARCHAR2(25),
    USERID         VARCHAR2(8),
    START_DATE     DATE,
    COMMENTS       VARCHAR2(25),
    MANAGER_ID     NUMBER(7),
    TITLE          VARCHAR2(25),
    DEPT_ID        NUMBER(7),
    SALARY         NUMBER(11, 2),
    COMMISSION_PCT NUMBER(4, 2)
);

CREATE TABLE S_IMAGE
(
    ID           NUMBER(7),
    FORMAT       VARCHAR2(25),
    USE_FILENAME VARCHAR2(25),
    FILENAME     VARCHAR2(25),
    IMAGE        VARCHAR2(50)
);


CREATE TABLE S_INVENTORY
(
    PRODUCT_ID               NUMBER(7),
    WAREHOUSE_ID             NUMBER(7),
    AMOUNT_IN_STOCK          NUMBER(9),
    REORDER_POINT            NUMBER(9),
    MAX_IN_STOCK             NUMBER(9),
    OUT_OF_STOCK_EXPLANATION VARCHAR2(255),
    RESTOCK_DATE             DATE
);

CREATE TABLE S_ITEM
(
    ORD_ID           NUMBER(7),
    ITEM_ID          NUMBER(7),
    PRODUCT_ID       NUMBER(7),
    PRICE            NUMBER(11, 2),
    QUANTITY         NUMBER(9),
    QUANTITY_SHIPPED NUMBER(9)
);

CREATE TABLE S_ORD
(
    ID           NUMBER(7),
    CUSTOMER_ID  NUMBER(7),
    DATE_ORDERED DATE,
    DATE_SHIPPED DATE,
    SALES_REP_ID NUMBER(7),
    TOTAL        NUMBER(11, 2),
    PAYMENT_TYPE VARCHAR2(6),
    ORDER_FILLED VARCHAR2(1)
);

CREATE TABLE S_PRODUCT
(
    ID                    NUMBER(7),
    NAME                  VARCHAR2(50),
    SHORT_DESC            VARCHAR2(255),
    LONGTEXT_ID           NUMBER(7),
    IMAGE_ID              NUMBER(7),
    SUGGESTED_WHLSL_PRICE NUMBER(11, 2),
    WHLSL_UNITS           VARCHAR2(25)
);

CREATE TABLE S_REGION
(
    ID   NUMBER(7),
    NAME VARCHAR2(50)
);

CREATE TABLE S_SALGRADE
(
    GRADE NUMBER,
    LOSAL NUMBER,
    HISAL NUMBER
);

CREATE TABLE S_TITLE
(
    TITLE VARCHAR2(25)
);


COMMENT ON TABLE S_CUSTOMER IS 'Информация о фирмах заказчиках';
COMMENT ON COLUMN S_CUSTOMER.ID IS 'Идентификатор заказчика';
COMMENT ON COLUMN S_CUSTOMER.NAME IS 'Название';
COMMENT ON COLUMN S_CUSTOMER.PHONE IS 'Телефон';
COMMENT ON COLUMN S_CUSTOMER.ADDRESS IS 'Адрес';
COMMENT ON COLUMN S_CUSTOMER.CITY IS 'Город';
COMMENT ON COLUMN S_CUSTOMER.STATE IS 'Штат';
COMMENT ON COLUMN S_CUSTOMER.COUNTRY IS 'Страна';
COMMENT ON COLUMN S_CUSTOMER.ZIP_CODE IS 'Почтовый индекс';
COMMENT ON COLUMN S_CUSTOMER.CREDIT_RATING IS 'Кредитный рейтинг';
COMMENT ON COLUMN S_CUSTOMER.COMMENTS IS 'Комментарии';
COMMENT ON COLUMN S_CUSTOMER.REGION_ID IS 'Ссылка на регион';
COMMENT ON COLUMN S_CUSTOMER.SALES_REP_ID IS 'Ссылка на торгового представителя';

COMMENT ON TABLE S_DEPT IS 'Информация об отделах';
COMMENT ON COLUMN S_DEPT.ID IS 'Идентификатор отдела';
COMMENT ON COLUMN S_DEPT.NAME IS 'Название отдела';
COMMENT ON COLUMN S_DEPT.REGION_ID IS 'Ссылка на регион';

COMMENT ON TABLE S_EMP IS 'Информация о сотрудниках (торговых представителях)';
COMMENT ON COLUMN S_EMP.ID IS 'Идентификатор сотрудника';
COMMENT ON COLUMN S_EMP.LAST_NAME IS 'Фамилия';
COMMENT ON COLUMN S_EMP.FIRST_NAME IS 'Имя';
COMMENT ON COLUMN S_EMP.START_DATE IS 'Дата начала работы';
COMMENT ON COLUMN S_EMP.COMMENTS IS 'Комментарии';
COMMENT ON COLUMN S_EMP.TITLE IS 'Должность';
COMMENT ON COLUMN S_EMP.SALARY IS 'Заработная плата';
COMMENT ON COLUMN S_EMP.COMMISSION_PCT IS 'Процент комиссионных';
COMMENT ON COLUMN S_EMP.DEPT_ID IS 'Ссылка на отдел, в котором сотрудник работает';
COMMENT ON COLUMN S_EMP.MANAGER_ID IS 'Ссылка на начальника (менеджера) сотрудника';
COMMENT ON COLUMN S_EMP.USERID IS 'Символьный идентификатор сотрудника';

COMMENT ON TABLE S_IMAGE IS 'Изображения товаров';
COMMENT ON COLUMN S_IMAGE.ID IS 'Идентификатор изображения';
COMMENT ON COLUMN S_IMAGE.FORMAT IS 'Формат';
COMMENT ON COLUMN S_IMAGE.USE_FILENAME IS 'Используемое в системе имя файла';
COMMENT ON COLUMN S_IMAGE.FILENAME IS 'Реальное имя файла';
COMMENT ON COLUMN S_IMAGE.IMAGE IS 'Изображение';

COMMENT ON TABLE S_ITEM IS 'Информация о группах товара, входящих в заказ';
COMMENT ON COLUMN S_ITEM.ITEM_ID IS 'Идентификатор группы';
COMMENT ON COLUMN S_ITEM.PRICE IS 'Цена одной единицы товара из группы';
COMMENT ON COLUMN S_ITEM.QUANTITY IS 'Количество заказанных единиц товара в группе';
COMMENT ON COLUMN S_ITEM.ORD_ID IS 'Ссылка на заказ, в который входит групп';
COMMENT ON COLUMN S_ITEM.QUANTITY_SHIPPED IS 'Отгруженное количество единиц товара';
COMMENT ON COLUMN S_ITEM.PRODUCT_ID IS 'Ссылка на описание товара из группы';

COMMENT ON TABLE S_ORD IS 'Информация о заказах';
COMMENT ON COLUMN S_ORD.ID IS 'Идентификатор заказа';
COMMENT ON COLUMN S_ORD.DATE_ORDERED IS 'Дата оформления заказа';
COMMENT ON COLUMN S_ORD.DATE_SHIPPED IS 'Дата отгрузки';
COMMENT ON COLUMN S_ORD.TOTAL IS 'Общая стоимость заказа';
COMMENT ON COLUMN S_ORD.PAYMENT_TYPE IS 'Тип оплаты';
COMMENT ON COLUMN S_ORD.CUSTOMER_ID IS 'Ссылка на заказчика';
COMMENT ON COLUMN S_ORD.SALES_REP_ID IS 'Ссылка на торгового представителя';
COMMENT ON COLUMN S_ORD.ORDER_FILLED IS 'Выполнение заказа';

COMMENT ON TABLE S_PRODUCT IS 'Информация о различных товарах, которые могут быть заказаны';
COMMENT ON COLUMN S_PRODUCT.ID IS 'Идентификатор товара';
COMMENT ON COLUMN S_PRODUCT.NAME IS 'Наименование товара';
COMMENT ON COLUMN S_PRODUCT.SHORT_DESC IS 'Краткое описание товара';
COMMENT ON COLUMN S_PRODUCT.LONGTEXT_ID IS 'Код полного описания продукта';
COMMENT ON COLUMN S_PRODUCT.IMAGE_ID IS 'Ссылка на изображение товара';
COMMENT ON COLUMN S_PRODUCT.SUGGESTED_WHLSL_PRICE IS 'Рекомендуемая цена';
COMMENT ON COLUMN S_PRODUCT.WHLSL_UNITS IS 'Единица измерения';

COMMENT ON TABLE S_REGION IS 'Информация о регионах';
COMMENT ON COLUMN S_REGION.ID IS 'Идентификатор региона';
COMMENT ON COLUMN S_REGION.NAME IS 'Название региона';

COMMENT ON TABLE S_SALGRADE IS 'Информация об уровнях зарплаты';
COMMENT ON COLUMN S_SALGRADE.GRADE IS 'Уровень зарплаты';
COMMENT ON COLUMN S_SALGRADE.LOSAL IS 'Наименьшее значение зарплаты для конкретного уровня';
COMMENT ON COLUMN S_SALGRADE.HISAL IS 'Наибольшее значение зарплаты для конкретного уровня';

COMMENT ON TABLE S_INVENTORY IS 'Информация о запасах';
COMMENT ON COLUMN S_INVENTORY.PRODUCT_ID IS 'Идентификатор продукта';
COMMENT ON COLUMN S_INVENTORY.WAREHOUSE_ID IS 'Идентификатор склада';
COMMENT ON COLUMN S_INVENTORY.AMOUNT_IN_STOCK IS 'Количество в запасе на складе';
COMMENT ON COLUMN S_INVENTORY.REORDER_POINT IS 'Момент возобновления заказа';
COMMENT ON COLUMN S_INVENTORY.MAX_IN_STOCK IS 'Максимальное количество на складе в запасе';
COMMENT ON COLUMN S_INVENTORY.OUT_OF_STOCK_EXPLANATION IS 'Пояснения о размещении товаров';
COMMENT ON COLUMN S_INVENTORY.RESTOCK_DATE IS 'Дата пополнения запасов';
