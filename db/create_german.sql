CREATE TABLE Germanlist (
    GermanID SERIAL PRIMARY KEY NOT NULL,
    word varchar(40) NOT NULL,
    meaning varchar(40) NOT NULL,
    answer1 varchar(40) NOT NULL,
    answer2 varchar(40) NOT NULL,
    answer3 varchar(40) NOT NULL,
    answer4 varchar(40) NOT NULL,
    FOREIGN KEY (GermanID) REFERENCES Kanjilist (KanjiID)
);