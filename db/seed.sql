use pr_db;

CREATE TABLE routines(
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (ID),
    ROUTINE VARCHAR(255) not null,
    reps int not null,
    exercisoone varchar(255) NOT NULL,
    exerciseTwo varchar(255) NOT NULL,
    exerciseThree varchar(255) NOT NULL,
    exerciseFour varchar(255) NOT NULL,
    exerciseFive varchar(255) NOT NULL,
);