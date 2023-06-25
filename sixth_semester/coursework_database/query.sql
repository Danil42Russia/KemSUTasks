-- 1. Получить сведения о покупателях, которые не пришли забрать свой заказ в назначенное им время и общее их число.
-- 1.1. Получить сведения о покупателях, которые не пришли забрать свой заказ в назначенное им время.
SELECT c.first_name, c.last_name, c.patronymic, c.phone
FROM clients c
     JOIN recipes r ON c.client_id = r.client_id
     JOIN orders o ON o.recipe_id = r.recipe_id
     JOIN orders_steps os ON os.step_id = o.step_id
WHERE os.name = 'Готово'
  AND o.order_time < '2023-06-22';

-- 1.2. Получить общее число о покупателей, которые не пришли забрать свой заказ в назначенное им время.
SELECT COUNT(*) AS count
FROM clients c
     JOIN recipes r ON c.client_id = r.client_id
     JOIN orders o ON o.recipe_id = r.recipe_id
     JOIN orders_steps os ON os.step_id = o.step_id
WHERE os.name = 'Готово'
  AND o.order_time < '2023-06-22';

-- 2. Получить перечень и общее число покупателей, которые ждут прибытия на склад нужных им медикаментов в целом и по указанной категории медикаментов.
-- 2.1. Получить перечень покупателей, которые ждут прибытия на склад нужных им медикаментов в целом.
SELECT DISTINCT c.first_name, c.last_name, c.patronymic, c.phone
FROM clients c
     JOIN recipes r ON c.client_id = r.client_id
     JOIN orders o ON o.recipe_id = r.recipe_id
     JOIN orders_steps os ON os.step_id = o.step_id
WHERE os.name = 'Ожидание';

-- 2.2. Получить общее число покупателей, которые ждут прибытия на склад нужных им медикаментов в целом.
SELECT COUNT(DISTINCT (c.first_name, c.last_name, c.patronymic, c.phone)) AS count
FROM clients c
     JOIN recipes r ON c.client_id = r.client_id
     JOIN orders o ON o.recipe_id = r.recipe_id
     JOIN orders_steps os ON os.step_id = o.step_id
WHERE os.name = 'Ожидание';

-- 2.3. Получить перечень, которые ждут прибытия на склад нужных им медикаментов по указанной категории медикаментов.
SELECT DISTINCT c.first_name, c.last_name, c.patronymic, c.phone
FROM clients c
     JOIN recipes r ON c.client_id = r.client_id
     JOIN orders o ON o.recipe_id = r.recipe_id
     JOIN orders_steps os ON os.step_id = o.step_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
     JOIN categories cat ON cat.category_id = m.category_id
WHERE os.name = 'Ожидание'
  AND cat.name = 'Настойки';

-- 2.4. Получить общее число покупателей, которые ждут прибытия на склад нужных им медикаментов по указанной категории медикаментов.
SELECT COUNT(DISTINCT (c.first_name, c.last_name, c.patronymic, c.phone)) AS count
FROM clients c
     JOIN recipes r ON r.client_id = c.client_id
     JOIN orders o ON o.recipe_id = r.recipe_id
     JOIN orders_steps os ON os.step_id = o.step_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
     JOIN categories cat ON cat.category_id = m.category_id
WHERE os.name = 'Ожидание'
  AND cat.name = 'Настойки';


-- 3. Получить перечень десяти наиболее часто используемых медикаментов в целом и указанной категории медикаментов.
-- 3.1. Получить перечень десяти наиболее часто используемых медикаментов в целом.
SELECT m.name, COUNT(*) AS count
FROM recipes r
     JOIN medicines m ON m.medicine_id = r.medicine_id
GROUP BY m.name
ORDER BY count DESC
LIMIT 10;

-- 3.2. Получить перечень десяти наиболее часто используемых медикаментов по указанной категории медикаментов.
SELECT m.name, COUNT(*) AS count
FROM recipes r
     JOIN medicines m ON m.medicine_id = r.medicine_id
     JOIN categories c ON c.category_id = m.category_id
WHERE c.name = 'Таблетки'
GROUP BY m.name
ORDER BY count DESC
LIMIT 10;


-- 4. Получить перечень и общее число покупателей, заказывавших определенное лекарство или определенные типы лекарств за данный период.
-- 4.1. Получить перечень и общее число покупателей, заказывавших определенное лекарство.
SELECT DISTINCT c.first_name, c.last_name, c.patronymic, c.phone
FROM orders o
     JOIN recipes r ON r.recipe_id = o.recipe_id
     JOIN clients c ON c.client_id = r.client_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
WHERE m.name = 'Таблетка 1';

-- 4.2. Получить общее число покупателей, заказывавших определенное лекарство.
SELECT COUNT(DISTINCT (c.first_name, c.last_name, c.patronymic, c.phone)) AS count
FROM orders o
     JOIN recipes r ON r.recipe_id = o.recipe_id
     JOIN clients c ON c.client_id = r.client_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
WHERE m.name = 'Таблетка 1';

-- 4.3. Получить перечень покупателей, заказывавших определенные типы лекарств за данный период.
SELECT DISTINCT cl.first_name, cl.last_name, cl.patronymic, cl.phone
FROM orders o
     JOIN recipes r ON r.recipe_id = o.recipe_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
     JOIN categories c ON c.category_id = m.category_id
     JOIN clients cl ON cl.client_id = r.client_id
WHERE c.name = 'Таблетки'
  AND o.creation_date BETWEEN '2023-06-19' AND '2023-06-20';

-- 4.4. Получить общее число покупателей, заказывавших определенные типы лекарств за данный период.
SELECT COUNT(DISTINCT (cl.first_name, cl.last_name, cl.patronymic, cl.phone)) AS count
FROM orders o
     JOIN recipes r ON r.recipe_id = o.recipe_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
     JOIN categories c ON c.category_id = m.category_id
     JOIN clients cl ON cl.client_id = r.client_id
WHERE c.name = 'Таблетки'
  AND o.creation_date BETWEEN '2023-06-19' AND '2023-06-20';


-- 5. Получить перечень и типы лекарств, достигших своей критической нормы или закончившихся.
-- 5.1. Получить перечень, достигших своей критической нормы или закончившихся.
SELECT m.name, w.quantity, w.critical_rate
FROM warehouse w
     JOIN medicines m ON m.medicine_id = w.medicine_id
WHERE critical_rate >= quantity;

-- 5.2. Получить типы лекарств, достигших своей критической нормы или закончившихся.
SELECT c.name, m.name, w.quantity, w.critical_rate
FROM warehouse w
     JOIN medicines m ON m.medicine_id = w.medicine_id
     JOIN categories c ON c.category_id = m.category_id
WHERE critical_rate >= quantity;


-- 6. Получить полный перечень и общее число заказов находящихся в производстве.
-- 6.1. Получить полный перечень заказов находящихся в производстве.
SELECT r.client_id, o.recipe_id, o.creation_date, o.order_time
FROM orders o
     JOIN orders_steps os ON os.step_id = o.step_id
     JOIN recipes r ON o.recipe_id = r.recipe_id
WHERE os.name = 'Изготовление';

-- 6.2. Получить общее число заказов находящихся в производстве.
SELECT COUNT(*) AS count
FROM orders o
     JOIN orders_steps os ON os.step_id = o.step_id
WHERE os.name = 'Изготовление';


-- 7. Получить полный перечень и общее число препаратов требующихся для заказов, находящихся в производстве.
-- 7.1. Получить полный перечень препаратов требующихся для заказов, находящихся в производстве.
SELECT DISTINCT m.name
FROM orders o
     JOIN orders_steps os ON os.step_id = o.step_id
     JOIN recipes r ON o.recipe_id = r.recipe_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
WHERE os.name = 'Изготовление';

-- 7.2. Получить общее число препаратов требующихся для заказов, находящихся в производстве.
SELECT COUNT(DISTINCT m.name)
FROM orders o
     JOIN orders_steps os ON os.step_id = o.step_id
     JOIN recipes r ON o.recipe_id = r.recipe_id
     JOIN medicines m ON m.medicine_id = r.medicine_id
WHERE os.name = 'Изготовление';


-- 8. Получить все технологии приготовления лекарств указанных типов, конкретных лекарств, лекарств, находящихся в справочнике заказов в производстве.
-- 8.1. Получить все технологии приготовления лекарств указанных типов.
SELECT m.name, t.cooking_method
FROM technologies t
     JOIN medicines m ON m.medicine_id = t.medicine_id
     JOIN categories c ON c.category_id = m.category_id
WHERE c.name IN ('Таблетки', 'Мази');

-- 8.2. Получить все технологии приготовления конкретных лекарств.
SELECT m.name, t.cooking_method
FROM technologies t
     JOIN medicines m ON m.medicine_id = t.medicine_id
WHERE m.name IN ('Микстура 2', 'Раствор 2');

-- 8.3. Получить все технологии приготовления лекарств, находящихся в справочнике заказов в производстве.
SELECT DISTINCT m.name, t.cooking_method
FROM technologies t
     JOIN medicines m ON m.medicine_id = t.medicine_id
     JOIN recipes r ON m.medicine_id = r.medicine_id
     JOIN orders o ON r.recipe_id = o.recipe_id
     JOIN orders_steps os ON o.step_id = os.step_id
WHERE os.name = 'Изготовление';


-- 9. Получить сведения о ценах на указанное лекарство в готовом виде, об объеме и ценах на все компоненты, требующиеся для этого лекарства.
-- 9.1. Получить сведения о ценах на указанное лекарство в готовом виде, об объеме.
SELECT m.name, m.cost, w.quantity
FROM medicines m
     JOIN warehouse w ON m.medicine_id = w.medicine_id
WHERE m.name = 'Таблетка 1';

-- 9.2. Получить сведения о ценах на все компоненты, требующиеся для этого лекарства.
SELECT m.name, w.quantity
FROM technologies t
     JOIN components c ON t.technology_id = c.technologies_id
     JOIN medicines m ON m.medicine_id = c.drug_component
     JOIN warehouse w ON w.medicine_id = c.drug_component
WHERE t.medicine_id = (SELECT medicine_id
                       FROM medicines
                       WHERE name = 'Таблетка 2');


-- 10. Получить сведения о наиболее часто делающих заказы клиентах на медикаменты определенного типа, на конкретные медикаменты.
-- 10.1. Получить сведения о наиболее часто делающих заказы клиентах на медикаменты определенного типа.
SELECT c.first_name, c.last_name, c.patronymic, c.phone, COUNT(*) AS count
FROM clients c
     JOIN recipes r ON c.client_id = r.client_id
     JOIN medicines m ON r.medicine_id = m.medicine_id
     JOIN categories cat ON cat.category_id = m.category_id
WHERE cat.name = 'Таблетки'
GROUP BY (c.first_name, c.last_name, c.patronymic, c.phone)
ORDER BY count DESC;

-- 10.2. Получить сведения о наиболее часто делающих заказы клиентах на конкретные медикаменты.
SELECT c.first_name, c.last_name, c.patronymic, c.phone, m.name, COUNT(*) AS count
FROM clients c
     JOIN recipes r ON c.client_id = r.client_id
     JOIN medicines m ON r.medicine_id = m.medicine_id
WHERE m.name IN ('Раствор 1', 'Таблетка 1')
GROUP BY (c.first_name, c.last_name, c.patronymic, c.phone, m.name)
ORDER BY count DESC;
