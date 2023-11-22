DROP TABLE IF EXISTS order_line;
DROP TABLE IF EXISTS customer_order;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_category;

CREATE TABLE product_category(
    category_name VARCHAR(255) NOT NULL PRIMARY KEY,
    category_description VARCHAR(500)
);

CREATE TABLE product(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    image_url VARCHAR(255),
    category VARCHAR(255),
    FOREIGN KEY (category) REFERENCES product_category(category_name)
);

CREATE TABLE customer(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    pw VARCHAR(255)
);

CREATE TABLE customer_order(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_date DATETIME NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE order_line(
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES customer_order(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

/*testing*/
INSERT INTO product_category VALUES ('Naytonohjaimet', 'AMD ja NVIDIA'),
('Emolevyt', 'AMD ja Intel'),('Muistit', 'DDR4 ja DDR5'),('Prosessorit', 'AMD ja Intel'), ('Kotelot', 'Torni ja Mini'), ('Virtalahteet', 'ATX ja mATX');


INSERT INTO product (product_name, price, category) VALUES ('Asus GeForce RTX 4070', 699, 'Naytonohjaimet'),('Asus ROG STRIX B550-F', 149, 'Emolevyt'), ('Asus 1000W TUF Gaming Gold', 189, 'Virtalahteet'),
('Intel Core i7-14700K, LGA1700, 3.40 GHz, 33MB, Boxed ', 499, 'Prosessorit'), ('Fractal Design Pop XL Air RGB Black, tornikotelo', 126, 'Kotelot'), ('Kingston 32GB (2 x 16GB) Fury Beast DDR5 6000MHz', 144, 'Muistit'),('MSI GeForce RTX 4070', 619, 'Naytonohjaimet'),('Gigabyte Z790 GAMING X AX', 269, 'Emolevyt'), ('SilverStone 500W Strider SFX', 118, 'Virtalahteet'),
('Intel Core i5-13600K, LGA1700, 3.50 GHz, 24MB, Boxed ', 369, 'Prosessorit'), ('Lian Li LANCOOL II Mesh C Performance, ikkunallinen miditornikotelo', 129, 'Kotelot'), ('Corsair 32GB (2 x 16GB) Vengeance RGB, DDR5 6000MHz', 164, 'Muistit'),('Gigabyte Radeon RX 7800 XT', 629, 'Naytonohjaimet'),('Asus TUF GAMING Z790-PLUS', 309, 'Emolevyt'), ('Corsair 850W RM850e', 144, 'Virtalahteet'),
('AMD Ryzen 7 7800X3D, AM5, 4.2 GHz, 8-Core', 439, 'Prosessorit'), ('Aerocool CS-107 v2, ikkunallinen minitornikotelo', 39, 'Kotelot'), ('Kingston 16GB (2 x 8GB) FURY Beast, DDR4 3200MHz', 49, 'Muistit');
