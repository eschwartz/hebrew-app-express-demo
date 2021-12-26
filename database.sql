CREATE DATABASE HebrewLearning;

USE HebrewLearning;



CREATE TABLE Words (
    id SERIAL PRIMARY KEY,
    word VARCHAR(256),
    audioSrc VARCHAR(1024),
    startMs INTEGER,
    endMs INTEGER
);

INSERT INTO Words 
    (word, audioSrc, startMs, endMs)
VALUES
    ('Shalom', '/audio/shalom.mp3', 5000, 8000),
    ('Ani', '/audio/ani.mp3', 6000, 8000)
;

