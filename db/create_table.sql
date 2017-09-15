CREATE TABLE Kanjilist (
    KanjiID SERIAL PRIMARY KEY NOT NULL,
    character varchar(40) NOT NULL,
    meaning varchar(40) NOT NULL,
    onyomi varchar(40) NOT NULL,
    kunyomi varchar(40) NOT NULL,
    answer1 varchar(40) NOT NULL,
    answer2 varchar(40) NOT NULL,
    answer3 varchar(40) NOT NULL,
    answer4 varchar(40) NOT NULL

)