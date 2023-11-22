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


INSERT INTO product (product_name, price, image_url, category) VALUES ('Asus GeForce RTX 4070', 699, 'https://ic.jimms.fi/product/3/2/438137-ig800gg.jpg', 'Naytonohjaimet'),('Asus ROG STRIX B550-F', 149, 'https://ic.jimms.fi/product/0/6/288203-ig800gg.jpg', 'Emolevyt'), ('Asus 1000W TUF Gaming Gold', 189, 'https://ic.jimms.fi/product/7/5/436674-ig800gg.jpg', 'Virtalahteet'),
('Intel Core i7-14700K, LGA1700, 3.40 GHz, 33MB, Boxed ', 499, 'https://ic.jimms.fi/product/2/6/464823-ig800gg.jpg', 'Prosessorit'), ('Fractal Design Pop XL Air RGB Black, tornikotelo', 126, 'https://ic.jimms.fi/product/2/2/393827-ig800gg.jpg', 'Kotelot'), ('Kingston 32GB (2 x 16GB) Fury Beast DDR5 6000MHz', 144, 'https://ic.jimms.fi/product/8/9/402880-ig800gg.jpg', 'Muistit'),('MSI GeForce RTX 4070', 619, 'https://ic.jimms.fi/product/5/8/459951-ig800gg.jpg', 'Naytonohjaimet'),('Gigabyte Z790 GAMING X AX', 269, 'https://ic.jimms.fi/product/9/7/406192-ig800gg.jpg', 'Emolevyt'), ('SilverStone 500W Strider SFX', 118, 'https://ic.jimms.fi/product/1/3/321416-ig800gg.jpg', 'Virtalahteet'),
('Intel Core i5-13600K, LGA1700, 3.50 GHz, 24MB, Boxed ', 369, 'https://ic.jimms.fi/product/0/5/405404-ig800gg.jpg', 'Prosessorit'), ('Lian Li LANCOOL II Mesh C Performance, ikkunallinen miditornikotelo', 129, 'https://ic.jimms.fi/product/9/5/374094-ig800gg.jpg', 'Kotelot'), ('Corsair 32GB (2 x 16GB) Vengeance RGB, DDR5 6000MHz', 164, 'https://ic.jimms.fi/product/5/8/408651-ig800gg.jpg', 'Muistit'),('Gigabyte Radeon RX 7800 XT', 629, 'https://ic.jimms.fi/product/8/1/457388-ig800gg.jpg', 'Naytonohjaimet'),('Asus TUF GAMING Z790-PLUS', 309, 'https://ic.jimms.fi/product/4/8/418341-ig800gg.jpg', 'Emolevyt'), ('Corsair 850W RM850e', 144, 'https://ic.jimms.fi/product/4/1/434348-ig800gg.jpg', 'Virtalahteet'),
('AMD Ryzen 7 7800X3D, AM5, 4.2 GHz, 8-Core', 439, 'https://ic.jimms.fi/product/3/6/428633-ig800gg.jpg', 'Prosessorit'), ('Aerocool CS-107 v2, ikkunallinen minitornikotelo', 39, 'https://ic.jimms.fi/product/5/7/331652-ig800gg.jpg', 'Kotelot'), ('Kingston 16GB (2 x 8GB) FURY Beast, DDR4 3200MHz', 49, 'https://ic.jimms.fi/product/5/3/343856-ig800gg.jpg', 'Muistit');
