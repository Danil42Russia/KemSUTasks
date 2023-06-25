-- region TABLE categories (Справочник категорий)
CREATE TABLE categories
(
    category_id SERIAL
        PRIMARY KEY,
    name        VARCHAR(16) NOT NULL
        UNIQUE
);
COMMENT ON TABLE categories IS 'Справочник категорий';
COMMENT ON COLUMN categories.category_id IS 'Идентификатор категории';
COMMENT ON COLUMN categories.name IS 'Название категорий';
-- endregion categories

-- region TABLE clients (Справочник клиентов)
CREATE TABLE clients
(
    client_id  SERIAL
        PRIMARY KEY,
    first_name VARCHAR(32) NOT NULL,
    last_name  VARCHAR(32) NOT NULL,
    patronymic VARCHAR(32) NOT NULL,
    phone      VARCHAR(10) NOT NULL
        UNIQUE,
    address    VARCHAR(64) NOT NULL
);

COMMENT ON TABLE clients IS 'Справочник клиентов';
COMMENT ON COLUMN clients.client_id IS 'Идентификатор клиента';
COMMENT ON COLUMN clients.first_name IS 'Имя';
COMMENT ON COLUMN clients.last_name IS 'Фамилия';
COMMENT ON COLUMN clients.patronymic IS 'Отчество';
COMMENT ON COLUMN clients.phone IS 'Номер телефона';
COMMENT ON COLUMN clients.address IS 'Адрес';
-- endregion clients

-- region TABLE medicines (Справочник лекарств)
CREATE TABLE medicines
(
    medicine_id SERIAL
        PRIMARY KEY,
    name        VARCHAR(16) NOT NULL
        UNIQUE,
    category_id SERIAL
        REFERENCES categories,
    cost        DECIMAL     NOT NULL
);
COMMENT ON TABLE medicines IS 'Справочник лекарств';
COMMENT ON COLUMN medicines.medicine_id IS 'Идентификатор лекарства';
COMMENT ON COLUMN medicines.name IS 'Название лекарства';
COMMENT ON COLUMN medicines.category_id IS 'Идентификатор категории';
COMMENT ON COLUMN medicines.cost IS 'Стоимость лекарства';
-- endregion medicines

-- region TABLE recipes (Справочник рецептов)
CREATE TABLE recipes
(
    recipe_id       SERIAL
        PRIMARY KEY,
    client_id       SERIAL
        REFERENCES clients,
    age             SMALLSERIAL,
    diagnosis       VARCHAR(128) NOT NULL,
    medicine_id     SERIAL
        REFERENCES medicines,
    amount_medicine DECIMAL      NOT NULL
);
COMMENT ON TABLE recipes IS 'Справочник рецептов';
COMMENT ON COLUMN recipes.recipe_id IS 'Идентификатор рецепта';
COMMENT ON COLUMN recipes.client_id IS 'Идентификатор пациента';
COMMENT ON COLUMN recipes.age IS 'Возраст пациента';
COMMENT ON COLUMN recipes.diagnosis IS 'Диагноз пациента';
COMMENT ON COLUMN recipes.medicine_id IS 'Идентификатор лекарства';
COMMENT ON COLUMN recipes.amount_medicine IS 'Количество принимаемого лекарства';
-- endregion recipes

-- region TABLE orders_steps (Справочник шагов заказов)
CREATE TABLE orders_steps
(
    step_id SERIAL
        PRIMARY KEY,
    name    VARCHAR(16) NOT NULL
        UNIQUE
);
COMMENT ON TABLE orders_steps IS 'Справочник шагов заказов';
COMMENT ON COLUMN orders_steps.step_id IS 'Идентификатор шага заказа';
COMMENT ON COLUMN orders_steps.name IS 'Название шага';
-- endregion orders_steps

-- region TABLE orders (Справочник заказов)
CREATE TABLE orders
(
    order_id      SERIAL
        PRIMARY KEY,
    recipe_id     SERIAL
        UNIQUE
        REFERENCES recipes,
    step_id       SERIAL
        REFERENCES orders_steps,
    creation_date TIMESTAMP DEFAULT NOW() NOT NULL,
    order_time    TIMESTAMP               NOT NULL,
    recipe_date   TIMESTAMP               NULL,

    CHECK ((step_id != 5 AND recipe_date IS NULL) OR (step_id = 5 AND recipe_date IS NOT NULL)),
    CHECK (creation_date < order_time),
    CHECK (order_time <= recipe_date)
);
COMMENT ON TABLE orders IS 'Справочник заказов';
COMMENT ON COLUMN orders.order_id IS 'Идентификатор заказа';
COMMENT ON COLUMN orders.recipe_id IS 'Идентификатор рецепта';
COMMENT ON COLUMN orders.step_id IS 'Идентификатор шага заказа';
COMMENT ON COLUMN orders.creation_date IS 'Время создания заказа';
COMMENT ON COLUMN orders.order_time IS 'Время готовности заказа';
COMMENT ON COLUMN orders.recipe_date IS 'Время получения заказа';
-- endregion recipes

-- region TABLE technologies (Справочник технологий приготовления различных лекарств)
CREATE TABLE technologies
(
    technology_id  SERIAL
        PRIMARY KEY,
    medicine_id    SERIAL
        UNIQUE
        REFERENCES medicines,
    cooking_method VARCHAR(128) NOT NULL
);

COMMENT ON TABLE technologies IS 'Справочник технологий приготовления различных лекарств';
COMMENT ON COLUMN technologies.technology_id IS 'Идентификатор технологии';
COMMENT ON COLUMN technologies.medicine_id IS 'Идентификатор приготовляемого лекарства';
COMMENT ON COLUMN technologies.cooking_method IS 'Способ приготовления';
-- endregion technologies

-- region TABLE warehouse (Справочник склад)
CREATE TABLE warehouse
(
    item_id       SERIAL
        PRIMARY KEY,
    medicine_id   SERIAL
        UNIQUE
        REFERENCES medicines,
    critical_rate SERIAL,
    quantity      SERIAL
);

COMMENT ON TABLE warehouse IS 'Справочник склад';
COMMENT ON COLUMN warehouse.item_id IS 'Идентификатор позиции лекарства на складе';
COMMENT ON COLUMN warehouse.medicine_id IS 'Идентификатор лекарства';
COMMENT ON COLUMN warehouse.critical_rate IS 'Минимальная критическая норма лекарства';
COMMENT ON COLUMN warehouse.quantity IS 'Количество лекарства';
-- endregion warehouse

-- region TABLE components (Справочник компонентов)
CREATE TABLE components
(
    technologies_id SERIAL
        REFERENCES technologies,
    drug_component  SERIAL
        REFERENCES medicines,

    UNIQUE (technologies_id, drug_component)
);

COMMENT ON TABLE components IS 'Справочник компонентов';
COMMENT ON COLUMN technologies.technology_id IS 'Идентификатор технологии';
COMMENT ON COLUMN components.drug_component IS 'Компонент лекарства';
-- endregion components
