db.Regions.drop();
db.Depts.drop();
db.Customers.drop();
db.Emps.drop();
db.Products.drop();
db.Ords.drop();

// region REGIONS
const USA_REGION_1 = db.Regions.insertOne({ "name": "USA" });
const S_AMERICA_REGION_2 = db.Regions.insertOne({ "name": "S.America" });
const AFRICA_REGION_3 = db.Regions.insertOne({ "name": "Africa" });
const AZIYA_REGION_4 = db.Regions.insertOne({ "name": "Aziya" });
const EUROPE_REGION_5 = db.Regions.insertOne({ "name": "Europe" });
const CENTRAL_AMERICA_REGION_6 = db.Regions.insertOne({ "name": "Central America" });
// endregion

// region DEPTS
const USA_FINANCE_DEPT_10 = db.Depts.insertOne({ "number": 10, "name": "Finance", "region": USA_REGION_1.insertedId });
const USA_SALES_DEPT_31 = db.Depts.insertOne({ "number": 31, "name": "Sales", "region": USA_REGION_1.insertedId });
const USA_OPERATIONS_DEPT_41 = db.Depts.insertOne({ "number": 41, "name": "Operations", "region": USA_REGION_1.insertedId });
const USA_ADMINISTRATION_DEPT_50 = db.Depts.insertOne({ "number": 50, "name": "Administration", "region": USA_REGION_1.insertedId });
const USA_EDUCATION_DEPT_54 = db.Depts.insertOne({ "number": 54, "name": "Education", "region": USA_REGION_1.insertedId });

const S_AMERICA_SALES_DEPT_32 = db.Depts.insertOne({ "number": 32, "name": "Sales", "region": S_AMERICA_REGION_2.insertedId });
const S_AMERICA_OPERATIONS_DEPT_42 = db.Depts.insertOne({ "number": 42, "name": "Operations", "region": S_AMERICA_REGION_2.insertedId });
const S_AMERICA_FINANCE_DEPT_11 = db.Depts.insertOne({ "number": 11, "name": "Finance", "region": S_AMERICA_REGION_2.insertedId });
const S_AMERICA_ACCOUNTING_DEPT_61 = db.Depts.insertOne({ "number": 61, "name": "Accounting", "region": S_AMERICA_REGION_2.insertedId });

const AFRICA_SALES_DEPT_33 = db.Depts.insertOne({ "number": 33, "name": "Sales", "region": AFRICA_REGION_3.insertedId });
const AFRICA_OPERATIONS_DEPT_43 = db.Depts.insertOne({ "number": 43, "name": "Operations", "region": AFRICA_REGION_3.insertedId });

const AZIYA_SALES_DEPT_34 = db.Depts.insertOne({ "number": 34, "name": "Sales", "region": AZIYA_REGION_4.insertedId });
const AZIYA_OPERATIONS_DEPT_44 = db.Depts.insertOne({ "number": 44, "name": "Operations", "region": AZIYA_REGION_4.insertedId });

const EUROPE_SALES_DEPT_35 = db.Depts.insertOne({ "number": 35, "name": "Sales", "region": EUROPE_REGION_5.insertedId });
const EUROP_OPERATIONS_DEPT_45 = db.Depts.insertOne({ "number": 45, "name": "Operations", "region": EUROPE_REGION_5.insertedId });
// endregion

// region CUSTOMERS
const CUST_201 = db.Customers.insertOne({
  name: "Unisports",
  phone: "55-2066101",
  address: "72 Via Bahia",
  city: "Sao Paolo",
  state: null,
  country: "Brazil",
  zip_code: "",
  creditRating: "EXCELLENT",
  comments: "Customer usually orders large amounts and has a high order total. This is okay as long",
});
const CUST_202 = db.Customers.insertOne({
  name: "Simms Atheconstics",
  phone: "8 1-20101",
  address: "6741 Takashi Blvd.",
  city: "Osaka",
  state: null,
  country: "Japan",
  zip_code: "",
  creditRating: "POOR",
  comments: "Customer should always pay by cash until his credit rating improves.",
});
const CUST_203 = db.Customers.insertOne({
  name: "Delhi Sports",
  phone: "91-10351",
  address: "11368 Chanakya",
  city: "New Delhi",
  state: null,
  country: "India",
  zip_code: "",
  creditRating: "GOOD",
  comments: "Customer specializes in baseball equipment and is the largest retailer in India.",
});
const CUST_204 = db.Customers.insertOne({
  name: "Womansport",
  phone: "1-206-104-0103",
  address: "281 King Street",
  city: "Seattle",
  state: null,
  country: "USA",
  zip_code: "98 101",
  creditRating: "EXCELLENT",
  comments: "",
});
const CUST_205 = db.Customers.insertOne({
  name: "Kams Sporting Goods",
  phone: "852-3692888",
  address: "15 Henessey Road",
  city: "",
  state: null,
  country: "Hong Kong",
  zip_code: "",
  creditRating: "EXCELLENT",
  comments: "",
});
const CUST_206 = db.Customers.insertOne({
  name: "Sportique",
  phone: "33-2257201",
  address: "172 Rue de Rivoli",
  city: "Cannes",
  state: null,
  country: "France",
  zip_code: "",
  creditRating: "EXCELLENT",
  comments: "Customer specializes in Soccer. Likes to order accessories in bright colors.",
});
const CUST_207 = db.Customers.insertOne({
  name: "Sweet Rock Sports",
  phone: "234-6036201",
  address: "6 Saint Antoine",
  city: "Lagos",
  state: null,
  country: "Nigeria",
  zip_code: "",
  creditRating: "GOOD",
  comments: "",
});
const CUST_208 = db.Customers.insertOne({
  name: "Muench Sports",
  phone: "49-527454",
  address: "435 Gruenestrasse",
  city: "Stuttgart",
  state: null,
  country: "Germany",
  zip_code: "",
  creditRating: "GOOD",
  comments: "Customer usually pays small orders by cash and large orders on credit.",
});
const CUST_209 = db.Customers.insertOne({
  name: "Beisbol Si!",
  phone: "809-352689",
  address: "792 Playa Del Mar",
  city: "Sen Pedro de Macons",
  state: null,
  country: "Dominican Republic",
  zip_code: "",
  creditRating: "EXCELLENT",
  comments: "",
});
const CUST_210 = db.Customers.insertOne({
  name: "Futbol Sonora",
  phone: "52-404562",
  address: "3 Via Saguaro",
  city: "Nogales",
  state: null,
  country: "Mexico",
  zip_code: "",
  creditRating: "EXCELLENT",
  comments: "Customer is difficult to reach by phone. Try mail.",
});
const CUST_211 = db.Customers.insertOne({
  name: "Kuhns Sports",
  phone: "42-1112921",
  address: "7 Modrany",
  city: "Prague",
  state: null,
  country: "Czechoslovakia",
  zip_code: "",
  creditRating: "EXCELLENT",
  comments: "",
});
const CUST_212 = db.Customers.insertOne({
  name: "Hamada Sport",
  phone: "20-1209211",
  address: "57A Corniche",
  city: "Alexandria",
  state: null,
  country: "Egypt",
  zip_code: "",
  creditRating: "EXCELLENT",
  comments: "Customer orders sea and water equipment.",
});
const CUST_213 = db.Customers.insertOne({
  name: "Big Johns Sports Emporium",
  phone: "1-415-555-6281",
  address: "4783 18th Street",
  city: "San Fracisco",
  state: null,
  country: "USA",
  zip_code: "94117",
  creditRating: "EXCELLENT",
  comments: "Customer has a dependable credit record.",
});
const CUST_214 = db.Customers.insertOne({
  name: "Ojibvay Retail",
  phone: "1-716-555-7171",
  address: "415 Main Street",
  city: "Buffalo",
  state: null,
  country: "USA",
  zip_code: "14202",
  creditRating: "POOR",
  comments: "",
});
const CUST_215 = db.Customers.insertOne({
  name: "Sporta Russia",
  phone: "7-3892456",
  address: "6000 Yekatamina",
  city: "Saint Petersburg",
  state: null,
  country: "Russia",
  zip_code: "",
  creditRating: "POOR",
  comments: "This customer is very friendly, but has difficulty paying bills. Insist upon cash.",
});
// endregion

// region EMPS
const EMP_1 = db.Emps.insertOne({
  last_name: "Velasquez",
  first_name: "Carmen",
  userid: "cvelasqu",
  start_date: new Date("1990-03-03T16:00:00Z"),
  comments: "",
  manager: null,
  title: "President",
  dept: db.Depts.findOne({ _id: S_AMERICA_SALES_DEPT_32.insertedId }),
  salary: 2550,
  commission_pct: null,
  customers: [],
});
const EMP_2 = db.Emps.insertOne({
  last_name: "Ngao",
  first_name: "LaDoris",
  userid: "lngao",
  start_date: new Date("1990-03-08T16:00:00Z"),
  comments: "",
  manager: EMP_1.insertedId,
  title: "VP, Operations",
  dept: db.Depts.findOne({ _id: USA_EDUCATION_DEPT_54.insertedId }),
  salary: 1450,
  commission_pct: null,
  customers: [],
});
const EMP_3 = db.Emps.insertOne({
  last_name: "Nagayamn",
  first_name: "Midori",
  userid: "mnagayam",
  start_date: new Date("1991-06-17T16:00:00Z"),
  comments: "",
  manager: EMP_1.insertedId,
  title: "VP, Sales",
  dept: db.Depts.findOne({ _id: USA_SALES_DEPT_31.insertedId }),
  salary: 1400,
  commission_pct: null,
  customers: [],
});
const EMP_4 = db.Emps.insertOne({
  last_name: "Quick-To-See",
  first_name: "Mark",
  userid: "mquickto",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_1.insertedId,
  title: "VP, Finance",
  dept: db.Depts.findOne({ _id: USA_FINANCE_DEPT_10.insertedId }),
  salary: 1450,
  commission_pct: null,
  customers: [],
});
const EMP_5 = db.Emps.insertOne({
  last_name: "Ropeburn",
  first_name: "Audry",
  userid: "aropebur",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_1.insertedId,
  title: "VP, Administration",
  dept: db.Depts.findOne({ _id: USA_ADMINISTRATION_DEPT_50.insertedId }),
  salary: 1550,
  commission_pct: null,
  customers: [],
});
const EMP_6 = db.Emps.insertOne({
  last_name: "Urguhart",
  first_name: "Molly",
  userid: "murguhar",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_2.insertedId,
  title: "Warehouse Manager",
  dept: db.Depts.findOne({ _id: USA_OPERATIONS_DEPT_41.insertedId }),
  salary: 1200,
  commission_pct: null,
  customers: [],
});
const EMP_7 = db.Emps.insertOne({
  last_name: "Menchu",
  first_name: "Robertn",
  userid: "rmenchu",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_2.insertedId,
  title: "Warehouse Manager",
  dept: db.Depts.findOne({ _id: S_AMERICA_OPERATIONS_DEPT_42.insertedId }),
  salary: 1250,
  commission_pct: null,
  customers: [],
});
const EMP_8 = db.Emps.insertOne({
  last_name: "Biri",
  first_name: "Ben",
  userid: "bbiri",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_2.insertedId,
  title: "Warehouse Manager",
  dept: db.Depts.findOne({ _id: AFRICA_OPERATIONS_DEPT_43.insertedId }),
  salary: 1100,
  commission_pct: null,
  customers: [],
});
const EMP_9 = db.Emps.insertOne({
  last_name: "Catchpole",
  first_name: "Antoinette",
  userid: "acatchpo",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_2.insertedId,
  title: "VP, Sales",
  dept: db.Depts.findOne({ _id: AZIYA_OPERATIONS_DEPT_44.insertedId }),
  salary: 1300,
  commission_pct: null,
  customers: [],
});
const EMP_10 = db.Emps.insertOne({
  last_name: "Havel",
  first_name: "Marta",
  userid: "mhavel",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_2.insertedId,
  title: "Warehouse Manager",
  dept: db.Depts.findOne({ _id: EUROP_OPERATIONS_DEPT_45.insertedId }),
  salary: 1307,
  commission_pct: null,
  customers: [],
});
const EMP_11 = db.Emps.insertOne({
  last_name: "Magee",
  first_name: "Colin",
  userid: "cmagee",
  start_date: new Date("1990-04-07T16:00:00Z"),
  comments: "",
  manager: EMP_3.insertedId,
  title: "Sales Representative",
  dept: db.Depts.findOne({ _id: USA_SALES_DEPT_31.insertedId }),
  salary: 1400,
  commission_pct: 10,
  customers: [
    db.Customers.findOne({ _id: CUST_204.insertedId }),
    db.Customers.findOne({ _id: CUST_209.insertedId }),
    db.Customers.findOne({ _id: CUST_213.insertedId }),
    db.Customers.findOne({ _id: CUST_214.insertedId }),
  ],
});
const EMP_12 = db.Emps.insertOne({
  last_name: "Nagayamn",
  first_name: "Midori",
  userid: "mnagayam",
  start_date: new Date("1991-06-17T16:00:00Z"),
  comments: "",
  manager: EMP_1.insertedId,
  title: "VP, Sales",
  dept: db.Depts.findOne({ _id: USA_SALES_DEPT_31.insertedId }),
  salary: 1400,
  commission_pct: null,
  customers: [
    db.Customers.findOne({ _id: CUST_201.insertedId }),
    db.Customers.findOne({ _id: CUST_210.insertedId }),
  ],
});

const EMP_13 = db.Emps.insertOne({
  last_name: "Sedeghi",
  first_name: "Yasmin",
  userid: "ysedeghi",
  start_date: new Date("1991-02-18T16:00:00Z"),
  comments: "",
  manager: EMP_3.insertedId,
  title: "Sales Representative",
  dept: db.Depts.findOne({ _id: AFRICA_SALES_DEPT_33.insertedId }),
  salary: 1515,
  commission_pct: 10,
  customers: [
    db.Customers.findOne({ _id: CUST_212.insertedId }),
  ],
});
const EMP_14 = db.Emps.insertOne({
  last_name: "Nguyen",
  first_name: "Mai",
  userid: "mnguyen",
  start_date: new Date("1992-01-22T16:00:00Z"),
  comments: "",
  manager: EMP_3.insertedId,
  title: "Sales Representative",
  dept: db.Depts.findOne({ _id: AZIYA_SALES_DEPT_34.insertedId }),
  salary: 1525,
  commission_pct: 15,
  customers: [
    db.Customers.findOne({ _id: CUST_202.insertedId }),
    db.Customers.findOne({ _id: CUST_203.insertedId }),
  ],
});
const EMP_15 = db.Emps.insertOne({
  last_name: "Nagayamn",
  first_name: "Midori",
  userid: "mnagayam",
  start_date: new Date("1991-06-17T16:00:00Z"),
  comments: "",
  manager: EMP_1.insertedId,
  title: "VP, Sales",
  dept: db.Depts.findOne({ _id: USA_SALES_DEPT_31.insertedId }),
  salary: 1400,
  commission_pct: null,
  customers: [
    db.Customers.findOne({ _id: CUST_205.insertedId }),
    db.Customers.findOne({ _id: CUST_206.insertedId }),
    db.Customers.findOne({ _id: CUST_211.insertedId }),
    db.Customers.findOne({ _id: CUST_215.insertedId }),
    db.Customers.findOne({ _id: CUST_208.insertedId }),
  ],
});

const EMP_16 = db.Emps.insertOne({
  last_name: "Maduro",
  first_name: "Elena",
  userid: "emaduro",
  start_date: new Date("1992-02-07T16:00:00Z"),
  comments: "",
  manager: EMP_6.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: USA_OPERATIONS_DEPT_41.insertedId }),
  salary: 1400,
  commission_pct: null,
  customers: [],
});
const EMP_17 = db.Emps.insertOne({
  last_name: "Smith",
  first_name: "George",
  userid: "gsmith",
  start_date: new Date("1992-02-07T16:00:00Z"),
  comments: "",
  manager: EMP_6.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: USA_OPERATIONS_DEPT_41.insertedId }),
  salary: 940,
  commission_pct: null,
  customers: [],
});
const EMP_18 = db.Emps.insertOne({
  last_name: "Nozaki",
  first_name: "Akira",
  userid: "anozaki",
  start_date: new Date("1991-02-09T16:00:00Z"),
  comments: "",
  manager: EMP_7.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: S_AMERICA_OPERATIONS_DEPT_42.insertedId }),
  salary: 1200,
  commission_pct: null,
  customers: [],
});
const EMP_19 = db.Emps.insertOne({
  last_name: "Patel",
  first_name: "Vikram",
  userid: "vpatel",
  start_date: new Date("1991-08-06T16:00:00Z"),
  comments: "",
  manager: EMP_7.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: S_AMERICA_OPERATIONS_DEPT_42.insertedId }),
  salary: 795,
  commission_pct: null,
  customers: [],
});
const EMP_20 = db.Emps.insertOne({
  last_name: "Newman",
  first_name: "Chad",
  userid: "cnewman",
  start_date: new Date("1991-07-21T16:00:00Z"),
  comments: "",
  manager: EMP_8.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: AFRICA_OPERATIONS_DEPT_43.insertedId }),
  salary: 850,
  commission_pct: null,
  customers: [],
});
const EMP_21 = db.Emps.insertOne({
  last_name: "Markarian",
  first_name: "Alexander",
  userid: "amarkari",
  start_date: new Date("1991-05-26T16:00:00Z"),
  comments: "",
  manager: EMP_8.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: AFRICA_OPERATIONS_DEPT_43.insertedId }),
  salary: 850,
  commission_pct: null,
  customers: [],
});
const EMP_22 = db.Emps.insertOne({
  last_name: "Chang",
  first_name: "Eddie",
  userid: "echang",
  start_date: new Date("1990-11-30T16:00:00Z"),
  comments: "",
  manager: EMP_9.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: AZIYA_OPERATIONS_DEPT_44.insertedId }),
  salary: 800,
  commission_pct: null,
  customers: [],
});
const EMP_23 = db.Emps.insertOne({
  last_name: "Patel",
  first_name: "Radha",
  userid: "rpatel",
  start_date: new Date("1990-10-17T16:00:00Z"),
  comments: "",
  manager: EMP_9.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: AZIYA_SALES_DEPT_34.insertedId }),
  salary: 795,
  commission_pct: null,
  customers: [],
});
const EMP_24 = db.Emps.insertOne({
  last_name: "Dancs",
  first_name: "Bela",
  userid: "bdancs",
  start_date: new Date("1991-03-17T16:00:00Z"),
  comments: "",
  manager: EMP_10.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: EUROP_OPERATIONS_DEPT_45.insertedId }),
  salary: 860,
  commission_pct: null,
  customers: [],
});
const EMP_25 = db.Emps.insertOne({
  last_name: "Schwart,z",
  first_name: "Sylvie",
  userid: "sschwart",
  start_date: new Date("1991-05-09T16:00:00Z"),
  comments: "",
  manager: EMP_10.insertedId,
  title: "Stock Clerk",
  dept: db.Depts.findOne({ _id: EUROP_OPERATIONS_DEPT_45.insertedId }),
  salary: 1100,
  commission_pct: null,
  customers: [],
});
// endregion

// region PRODUCTS
const prod_10012 = db.Products.insertOne({
  name: "Ace Ski Boot",
  short_desc: "Ace Ski Boot",
  imageURL: "",
  suggested_whlsl_price: 1002,
  whlsl_units: 200,
});
const prod_10013 = db.Products.insertOne({
  name: "Pro Ski Boot",
  short_desc: "Advanced ski boot",
  imageURL: "",
  suggested_whlsl_price: 410,
  whlsl_units: null,
});
const prod_20106 = db.Products.insertOne({
  name: "Junior Soccer Ball",
  short_desc: "Junior soccer ball",
  imageURL: "",
  suggested_whlsl_price: 11,
  whlsl_units: null,
});
const prod_10011 = db.Products.insertOne({
  name: "Bunny Boot",
  short_desc: "Beginners ski boot",
  imageURL: "",
  suggested_whlsl_price: 150,
  whlsl_units: null,
});
const prod_20108 = db.Products.insertOne({
  name: "World Cup Soccer Ball",
  short_desc: "World cup soccer ball",
  imageURL: "",
  suggested_whlsl_price: 28,
  whlsl_units: null,
});
const prod_20201 = db.Products.insertOne({
  name: "World Cup Net",
  short_desc: "World cup net",
  imageURL: "",
  suggested_whlsl_price: 123,
  whlsl_units: null,
});
const prod_20510 = db.Products.insertOne({
  name: "Black Hawk Knee Pads",
  short_desc: "Knee pads, pair",
  imageURL: "",
  suggested_whlsl_price: 9,
  whlsl_units: null,
});
const prod_20512 = db.Products.insertOne({
  name: "Black Hawk Elbow Pads",
  short_desc: "Elbow pads, pair",
  imageURL: "",
  suggested_whlsl_price: 8,
  whlsl_units: null,
});
const prod_30321 = db.Products.insertOne({
  name: "Grand Prix Bicycle",
  short_desc: "Road bicycle",
  imageURL: "",
  suggested_whlsl_price: 1669,
  whlsl_units: null,
});
const prod_30326 = db.Products.insertOne({
  name: "Himalaya Bicycle",
  short_desc: "Himalaya Bicycle",
  imageURL: "",
  suggested_whlsl_price: 582,
  whlsl_units: null,
});
const prod_30421 = db.Products.insertOne({
  name: "Grand Prix Bicycle Tires",
  short_desc: "Grand Prix Bicycle Tires",
  imageURL: "",
  suggested_whlsl_price: 16,
  whlsl_units: null,
});
const prod_30433 = db.Products.insertOne({
  name: "New Air Pump",
  short_desc: "Tire pump",
  imageURL: "",
  suggested_whlsl_price: 20,
  whlsl_units: null,
});
const prod_32779 = db.Products.insertOne({
  name: "Slaker Water Bottle",
  short_desc: "Mater bottle",
  imageURL: "",
  suggested_whlsl_price: 7,
  whlsl_units: null,
});
const prod_32861 = db.Products.insertOne({
  name: "Safe-T Helmet",
  short_desc: "Bicycle helmet",
  imageURL: "",
  suggested_whlsl_price: 60,
  whlsl_units: null,
});
const prod_40421 = db.Products.insertOne({
  name: "Alexeyer Pro Lifting Bar",
  short_desc: "Straight bar",
  imageURL: "",
  suggested_whlsl_price: 65,
  whlsl_units: null,
});
const prod_40422 = db.Products.insertOne({
  name: "Pro Curling Bar",
  short_desc: "Curling bar",
  imageURL: "",
  suggested_whlsl_price: 50,
  whlsl_units: null,
});
const prod_41010 = db.Products.insertOne({
  name: "Prostar 10 Pound Weight",
  short_desc: "Ten pound weight",
  imageURL: "",
  suggested_whlsl_price: 8,
  whlsl_units: null,
});
const prod_41020 = db.Products.insertOne({
  name: "Prostar 20 Pound Weight",
  short_desc: "Twenty pound weight",
  imageURL: "",
  suggested_whlsl_price: 12,
  whlsl_units: null,
});
const prod_41050 = db.Products.insertOne({
  name: "Prostar 50 Pound Weight",
  short_desc: "Fifty pound weight",
  imageURL: "",
  suggested_whlsl_price: 25,
  whlsl_units: null,
});
const prod_41080 = db.Products.insertOne({
  name: "Prostar 80 Pound Weigh",
  short_desc: "Eighty pound weight",
  imageURL: "",
  suggested_whlsl_price: 35,
  whlsl_units: null,
});
const prod_50417 = db.Products.insertOne({
  name: "Griffey Glove",
  short_desc: "Outfielders glove",
  imageURL: "",
  suggested_whlsl_price: 80,
  whlsl_units: null,
});
const prod_50418 = db.Products.insertOne({
  name: "Alomar Glove",
  short_desc: "Infielders glove",
  imageURL: "",
  suggested_whlsl_price: 75,
  whlsl_units: null,
});
const prod_50419 = db.Products.insertOne({
  name: "Steinbach Glove",
  short_desc: "Catchers glove",
  imageURL: "",
  suggested_whlsl_price: 80,
  whlsl_units: null,
});
const prod_50530 = db.Products.insertOne({
  name: "Cabrera Ba",
  short_desc: "Thirty inch ba",
  imageURL: "",
  suggested_whlsl_price: 45,
  whlsl_units: null,
});
const prod_50532 = db.Products.insertOne({
  name: "Puckett Bat",
  short_desc: "Thirty-two inch bat",
  imageURL: "",
  suggested_whlsl_price: 47,
  whlsl_units: null,
});
const prod_50536 = db.Products.insertOne({
  name: "Winfield Bat",
  short_desc: "Thirty-six inch bat",
  imageURL: "",
  suggested_whlsl_price: 50,
  whlsl_units: null,
});
// endregion

// region ORDS
const date = (date) => {
  const year = date.split(".")[2];
  const month = date.split(".")[1];
  const day = date.split(".")[0];
  return new Date(year + "-" + month + "-" + day + "T16:00:00Z");
};

db.Ords.insertMany([
  {
    customer: db.Customers.findOne({ _id: CUST_204.insertedId }),
    date_ordered: date("31.08.1992"),
    date_shipped: date("10.09.1992"),
    sales_rep: EMP_11.insertedId,
    total: 601100,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_10011.insertedId }),
        price: 135,
        quantity: 500,
      },
      {
        product: db.Products.findOne({ _id: prod_10013.insertedId }),
        price: 380,
        quantity: 400,
      },
      {
        product: db.Products.findOne({ _id: prod_10011.insertedId }),
        price: 14,
        quantity: 500,
      },
      {
        product: db.Products.findOne({ _id: prod_10013.insertedId }),
        price: 36,
        quantity: 400,
      },
      {
        product: db.Products.findOne({ _id: prod_30326.insertedId }),
        price: 582,
        quantity: 600,
      },
      {
        product: db.Products.findOne({ _id: prod_30433.insertedId }),
        price: 20,
        quantity: 450,
      },
      {
        product: db.Products.findOne({ _id: prod_41010.insertedId }),
        price: 8,
        quantity: 250,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_206.insertedId }),
    date_ordered: date("01.09.1992"),
    date_shipped: date("08.09.1992"),
    sales_rep: EMP_15.insertedId,
    total: 8335,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20108.insertedId }),
        price: 28,
        quantity: 100,
      },
      {
        product: db.Products.findOne({ _id: prod_20201.insertedId }),
        price: 123,
        quantity: 45,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_208.insertedId }),
    date_ordered: date("02.09.1992"),
    date_shipped: date("22.09.1992"),
    sales_rep: EMP_15.insertedId,
    total: 377,
    payment_type: "CASH",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_30433.insertedId }),
        price: 20,
        quantity: 15,
      },
      {
        product: db.Products.findOne({ _id: prod_32779.insertedId }),
        price: 7,
        quantity: 1,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_208.insertedId }),
    date_ordered: date("03.09.1992"),
    date_shipped: date("23.09.1992"),
    sales_rep: EMP_15.insertedId,
    total: 32430,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20510.insertedId }),
        price: 9,
        quantity: 7,
      },
      {
        product: db.Products.findOne({ _id: prod_20512.insertedId }),
        price: 8,
        quantity: 12,
      },
      {
        product: db.Products.findOne({ _id: prod_30321.insertedId }),
        price: 1669,
        quantity: 19,
      },
      {
        product: db.Products.findOne({ _id: prod_30421.insertedId }),
        price: 16,
        quantity: 35,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_210.insertedId }),
    date_ordered: date("07.09.1992"),
    date_shipped: date("15.09.1992"),
    sales_rep: EMP_12.insertedId,
    total: 15634,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20108.insertedId }),
        price: 28,
        quantity: 46,
      },
      {
        product: db.Products.findOne({ _id: prod_20201.insertedId }),
        price: 123,
        quantity: 21,
      },
      {
        product: db.Products.findOne({ _id: prod_50418.insertedId }),
        price: 75,
        quantity: 98,
      },
      {
        product: db.Products.findOne({ _id: prod_50419.insertedId }),
        price: 80,
        quantity: 27,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_211.insertedId }),
    date_ordered: date("07.09.1992"),
    date_shipped: date("21.09.1992"),
    sales_rep: EMP_15.insertedId,
    total: 142171,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20106.insertedId }),
        price: 11,
        quantity: 50,
      },
      {
        product: db.Products.findOne({ _id: prod_20108.insertedId }),
        price: 28,
        quantity: 22,
      },
      {
        product: db.Products.findOne({ _id: prod_20201.insertedId }),
        price: 115,
        quantity: 130,
      },
      {
        product: db.Products.findOne({ _id: prod_30321.insertedId }),
        price: 1669,
        quantity: 75,
      },
      {
        product: db.Products.findOne({ _id: prod_30421.insertedId }),
        price: 16,
        quantity: 55,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_212.insertedId }),
    date_ordered: date("07.09.1992"),
    date_shipped: date("10.09.1992"),
    sales_rep: EMP_13.insertedId,
    total: 149570,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20510.insertedId }),
        price: 9,
        quantity: 9,
      },
      {
        product: db.Products.findOne({ _id: prod_20512.insertedId }),
        price: 8,
        quantity: 18,
      },
      {
        product: db.Products.findOne({ _id: prod_30321.insertedId }),
        price: 1669,
        quantity: 95,
      },
      {
        product: db.Products.findOne({ _id: prod_32779.insertedId }),
        price: 7,
        quantity: 60,
      },
      {
        product: db.Products.findOne({ _id: prod_32861.insertedId }),
        price: 60,
        quantity: 57,
      },
      {
        product: db.Products.findOne({ _id: prod_41080.insertedId }),
        price: 35,
        quantity: 50,
      },
      {
        product: db.Products.findOne({ _id: prod_41010.insertedId }),
        price: 45,
        quantity: 42,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_204.insertedId }),
    date_ordered: date("09.09.1992"),
    date_shipped: date("21.09.1992"),
    sales_rep: EMP_11.insertedId,
    total: 2770,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_40421.insertedId }),
        price: 65,
        quantity: 27,
      },
      {
        product: db.Products.findOne({ _id: prod_41080.insertedId }),
        price: 35,
        quantity: 29,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_201.insertedId }),
    date_ordered: date("28.08.1992"),
    date_shipped: date("17.09.1992"),
    sales_rep: EMP_12.insertedId,
    total: 601100,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20106.insertedId }),
        price: 9,
        quantity: 1000,
      },
      {
        product: db.Products.findOne({ _id: prod_30321.insertedId }),
        price: 1500,
        quantity: 50,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_202.insertedId }),
    date_ordered: date("31.08.1992"),
    date_shipped: date("10.09.1992"),
    sales_rep: EMP_14.insertedId,
    total: 595,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_40421.insertedId }),
        price: 85,
        quantity: 7,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_203.insertedId }),
    date_ordered: date("31.08.1992"),
    date_shipped: date("18.09.1992"),
    sales_rep: EMP_14.insertedId,
    total: 7707,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20510.insertedId }),
        price: 9,
        quantity: 18,
      },
      {
        product: db.Products.findOne({ _id: prod_20512.insertedId }),
        price: 8,
        quantity: 25,
      },
      {
        product: db.Products.findOne({ _id: prod_50417.insertedId }),
        price: 80,
        quantity: 53,
      },
      {
        product: db.Products.findOne({ _id: prod_50530.insertedId }),
        price: 45,
        quantity: 69,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_210.insertedId }),
    date_ordered: date("31.08.1992"),
    date_shipped: date("10.09.1992"),
    sales_rep: EMP_12.insertedId,
    total: 550,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_20106.insertedId }),
        price: 11,
        quantity: 50,
      },
    ],
  },
  {
    customer: db.Customers.findOne({ _id: CUST_213.insertedId }),
    date_ordered: date("08.09.1992"),
    date_shipped: date("28.09.1992"),
    sales_rep: EMP_11.insertedId,
    total: 601100,
    payment_type: "CREDIT",
    order_filled: null,
    products: [
      {
        product: db.Products.findOne({ _id: prod_10011.insertedId }),
        price: 140,
        quantity: 150,
      },
      {
        product: db.Products.findOne({ _id: prod_10012.insertedId }),
        price: 175,
        quantity: 600,
      },
      {
        product: db.Products.findOne({ _id: prod_30326.insertedId }),
        price: 582,
        quantity: 1500,
      },
      {
        product: db.Products.findOne({ _id: prod_32861.insertedId }),
        price: 60,
        quantity: 50,
      },
      {
        product: db.Products.findOne({ _id: prod_50418.insertedId }),
        price: 75,
        quantity: 43,
      },
    ],
  },
]);
// endregion
