/* Replace with your SQL commands */

--Tables
CREATE TABLE hotdogs (
  id SERIAL NOT NULL PRIMARY KEY,
  img text NOT NULL,
  name text NOT NULL,
  price float8  NOT NULL,
  description text NOT NULL
);

--Data
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/1519940822-hot-dog-guilt-vertical.jpg?crop=1.0xw:1xh;center,top&resize=980:*', 'New York City', 1, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/1519846917-grilled-cheese-dogs-vertical.jpg?crop=1.0xw:1xh;center,top&resize=980:*', 'Chicago', 2, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/del.h-cdn.co/assets/17/24/640x959/gallery-1497650208-delish-fimb-jalapeno-popper-dogs-pin-04.jpg?resize=980:*', 'Atlanta and the south', 2.5, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-quesadogas-pin-1-1526953105.jpg?crop=1xw:1xh;center,top&resize=980:*', 'Kansas Cite', 1.2, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/del.h-cdn.co/assets/17/20/640x959/gallery-1495057199-delish-mac-cheese-dogs-1.jpg?resize=980:*', 'California', 3, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chili-cheese-dog-casserole-pin-1-1526953352.jpg?crop=1xw:1xh;center,top&resize=980:*', 'Nevada', 1, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-pickle-dogs-pin-1-1526953165.jpg?crop=1xw:1xh;center,top&resize=980:*', 'Utah', 3.5, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
INSERT INTO hotdogs (img, name, price, description) VALUES ('https://hips.hearstapps.com/del.h-cdn.co/assets/17/25/640x958/gallery-1498089717-delish-blt-dogs-pin-01.jpg?resize=980:*', 'Arizona', 5, 'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard');
