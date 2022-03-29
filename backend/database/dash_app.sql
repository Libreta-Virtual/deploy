/* Creamos la base de datos  */
CREATE DATABASE dash_app;

/* Creamos la tabla de la base de datos dashbs */
CREATE TABLE dashbs (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content varchar(255) NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


/* insertamos datos a la tabla */
INSERT INTO dashbs (id, title, content)
VALUES (1, 'Title', 'First Content'),
    (2, 'Title', 'Second Content'),
    (3, 'Title', 'Third Content'),
    (4, 'Title', 'Fourth Content'),
    (5, 'Title', 'Fifth Content'),
    (6, 'Title', 'Sixth Content'),
    (7, 'Title', 'Seventh Content'),
    (8, 'Title', 'Eighth Content'),
    (9, 'Title', 'Ninth Content'),
    (10, 'Title', 'Tenth Content');



