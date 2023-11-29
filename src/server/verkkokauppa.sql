DROP TABLE IF EXISTS order_line;

DROP TABLE IF EXISTS customer_order;

DROP TABLE IF EXISTS customer;

DROP TABLE IF EXISTS product;

DROP TABLE IF EXISTS product_category;

CREATE TABLE
    product_category(
        category_name VARCHAR(255) NOT NULL PRIMARY KEY,
        category_description VARCHAR(500)
    );

CREATE TABLE
    product(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        product_name VARCHAR(255) NOT NULL,
        product_description VARCHAR(500),
        price DECIMAL(10, 2),
        image_url VARCHAR(255),
        category VARCHAR(255),
        FOREIGN KEY (category) REFERENCES product_category(category_name)
    );

CREATE TABLE
    customer(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        username VARCHAR(255) UNIQUE,
        pw VARCHAR(255)
    );

CREATE TABLE
    customer_order(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        order_date DATETIME NOT NULL,
        customer_id INT,
        FOREIGN KEY (customer_id) REFERENCES customer(id)
    );

CREATE TABLE
    order_line(
        order_id INT,
        product_id INT,
        quantity INT,
        PRIMARY KEY (order_id, product_id),
        FOREIGN KEY (order_id) REFERENCES customer_order(id),
        FOREIGN KEY (product_id) REFERENCES product(id)
    );

/*testing*/

INSERT INTO product_category
VALUES (
        'Naytonohjaimet',
        'AMD ja NVIDIA'
    ), ('Emolevyt', 'AMD ja Intel'), ('Muistit', 'DDR4 ja DDR5'), ('Prosessorit', 'AMD ja Intel'), ('Kotelot', 'Torni ja Mini'), ('Virtalahteet', 'ATX ja mATX');

INSERT INTO
    product (
        product_name,
        product_description,
        price,
        image_url,
        category
    )
VALUES (
        'Asus GeForce RTX 4070',
        
        'Kellotaajuus: 2520 MHz(Boost Clock)
         Muistia: 12 GB GDDR6X',
         699,
        'https://ic.jimms.fi/product/3/2/438137-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Asus ROG STRIX B550-F',
        '3. sukupolven AMD Ryzen -prosessorit
         AMD B550 piirisarja
         4 x DDR4 DIMM, maks. 128GB',
          149,
        'https://ic.jimms.fi/product/0/6/288203-ig800gg.jpg',
        'Emolevyt'
    ), (
        'Asus 1000W TUF Gaming Gold',
        'Teho: 1000W
         Mitat: 150x 150x 86 mm
         Hyötysuhde: 80 Plus Gold',
        189,
        'https://ic.jimms.fi/product/7/5/436674-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'Intel Core i7-14700K, LGA1700, 3.40 GHz, 33MB, Boxed ',
        'Ydinten määrä: 20 (8P + 12E)
        Threadien määrä: 28
        Kellotaajuus: 3.4 GHz (Base, P-core) / 2.5 GHz (Base, E-core)',
        499,
        'https://ic.jimms.fi/product/2/6/464823-ig800gg.jpg',
        'Prosessorit'
    ), (
        'Fractal Design Pop XL Air RGB Black, tornikotelo',
        'Majoittaa E-ATX (maks. 280 mm) / ATX / mATX / Mini ITX -emolevyjä
         Sisältää neljä 120 mm Aspect RGB -tuuletinta (ja tukee kahta lisää, kokonaistuki siis kuudelle)
         Virtalähteen pituus: 205 mm
         Näytönohjaimen pituus: 455 mm kun etutuuletin asennettuna',
        126,
        'https://ic.jimms.fi/product/2/2/393827-ig800gg.jpg',
        'Kotelot'
    ), (
        'Kingston 32GB (2 x 16GB) Fury Beast DDR5 6000MHz',
        'Kapasiteetti: 32GB (2 x 16GB)
         Nopeus: 6000 MT/s
         Latenssi: CL40',
        144,
        'https://ic.jimms.fi/product/8/9/402880-ig800gg.jpg',
        'Muistit'
    ), (
        'MSI GeForce RTX 4070',
        'CUDA coret: 5888
        Kellotaajuus: Extreme Performance: 2520 MHz (MSI Center)
        Muisti: 12GB GDDR6X ',
        619,
        'https://ic.jimms.fi/product/5/8/459951-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Gigabyte Z790 GAMING X AX',
        'Prosessorituki: 13. ja 12. sukupolven Intel Core, Pentium Gold ja Celeron -prosessoreja
         Muisti: 4 x DDR5, maks. 128GB
         Audio: Realtek® Audio CODEC ',
        269,
        'https://ic.jimms.fi/product/9/7/406192-ig800gg.jpg',
        'Emolevyt'
    ), (
        'SilverStone 500W Strider SFX',
        'Teho: 500W 
         Hyötysuhde: 87%~90% 
         Mitat: 125 x 63,5 x 130mm',
        118,
        'https://ic.jimms.fi/product/1/3/321416-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'Intel Core i5-13600K, LGA1700, 3.50 GHz, 24MB, Boxed ',
        'Ydinten määrä: 14 (6P + 8E)
        Threadien määrä: 20
        Kellotaajuus: 3.50 GHz (Base, P-core)',
        369,
        'https://ic.jimms.fi/product/0/5/405404-ig800gg.jpg',
        'Prosessorit'
    ), (
        'Lian Li LANCOOL II Mesh C Performance, ikkunallinen miditornikotelo',
        'Väri: Musta
        Mitat (SxLxK): 478 x 229 x 494 mm
        Yhteensopivuus: E-ATX/ATX (leveys: alle 280mm) / mATX / ITX
        Virtalähteen pituus: 210 mm
        Näytönohjaimen pituus: 384 mm',
        129,
        'https://ic.jimms.fi/product/9/5/374094-ig800gg.jpg',
        'Kotelot'
    ), (
        'Corsair 32GB (2 x 16GB) Vengeance RGB, DDR5 6000MHz',
        'Muistisarja: Vengeance RGB DDR5
        Muistityyppi: DDR5 DIMM, 288-pin
        Kapasiteetti: 32GB (2 x 16GB)
        Latenssi: 30-36-36-76',
        164,
        'https://ic.jimms.fi/product/5/8/408651-ig800gg.jpg',
        'Muistit'
    ), (
        'Gigabyte Radeon RX 7800 XT',
        'Stream-prosessorit: 3840
        Kellotaajuus: Boost Clock: 2254 MHz
         Muisti: 16GB GDDR6',
        629,
        'https://ic.jimms.fi/product/8/1/457388-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Asus TUF GAMING Z790-PLUS',
        'Intel LGA1700 -kanta<br>
        <br>Tukee 13. sukupolven Intel Core -prosessoreja ja 12. sukupolven Intel Core, Pentium Gold ja Celeron -prosessoreja
        Muisti: 4 x DDR5 DIMM, maks. 128GB
         Audio: Realtek S1220A 7.1 Surround Sound High Definition Audio CODEC  ',
        309,
        'https://ic.jimms.fi/product/4/8/418341-ig800gg.jpg',
        'Emolevyt'
    ), (
        'Corsair 850W RM850e',
        'Teho: 850 W
        Mitat: 150 x 140 x 86 mm
        80 PLUS Gold -sertifioitu',
        144,
        'https://ic.jimms.fi/product/4/1/434348-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'AMD Ryzen 7 7800X3D, AM5, 4.2 GHz, 8-Core',
        'Ydinten määrä: 8
        Threadien määrä: 16
        Kellotaajuus: Base Clock: 4.2 GHz',
        439,
        'https://ic.jimms.fi/product/3/6/428633-ig800gg.jpg',
        'Prosessorit'
    ), (
        'Aerocool CS-107 v2, ikkunallinen minitornikotelo',
        'Kotelotyyppi: Minitorni
        Väri: Musta
        Yhteensopivuus: Micro ATX / mini-ITX
        Näytönohjaimen pituus: 286mm
        Virtalähteen pituus: 159mm  ',
        39,
        'https://ic.jimms.fi/product/5/7/331652-ig800gg.jpg',
        'Kotelot'
    ), (
        'Kingston 16GB (2 x 8GB) FURY Beast, DDR4 3200MHz',
        'Kapasiteetti: 16GB (2 x 8GB)
         Nopeus: 3200MHz
         Latenssi: CL16 (16-18-18) ',
        49,
        'https://ic.jimms.fi/product/5/3/343856-ig800gg.jpg',
        'Muistit'
    );