CREATE TABLE genshin_c1 (
  c1 VARCHAR(255) NOT NULL PRIMARY KEY,
  description_c1 TEXT NOT NULL
)
COMMENT='Liste des constellation n°1 des personnages de Genshin Impact.'
;

CREATE TABLE genshin_c2 (
  c2 VARCHAR(255) NOT NULL PRIMARY KEY,
  description_c2 TEXT NOT NULL
)
COMMENT='Liste des constellation n°2 des personnages de Genshin Impact.'
;

CREATE TABLE genshin_c3 (
  c3 VARCHAR(255) NOT NULL PRIMARY KEY,
  description_c3 TEXT NOT NULL
)
COMMENT='Liste des constellation n°3 des personnages de Genshin Impact.'
;

CREATE TABLE genshin_c4 (
  c4 VARCHAR(255) NOT NULL PRIMARY KEY,
  description_c4 TEXT NOT NULL
)
COMMENT='Liste des constellation n°4 des personnages de Genshin Impact.'
;

CREATE TABLE genshin_c5 (
  c5 VARCHAR(255) NOT NULL PRIMARY KEY,
  description_c5 TEXT NOT NULL
)
COMMENT='Liste des constellation n°5 des personnages de Genshin Impact.'
;

CREATE TABLE genshin_c6 (
  c6 VARCHAR(255) NOT NULL PRIMARY KEY,
  description_c6 TEXT NOT NULL
)
COMMENT='Liste des constellation n°1 des personnages de Genshin Impact.'
;

CREATE TABLE genshin_constellations (
  constellation VARCHAR(100) NOT NULL PRIMARY KEY,
  c1 VARCHAR(255) NOT NULL,
  c2 VARCHAR(255) NOT NULL,
  c3 VARCHAR(255) NOT NULL,
  c4 VARCHAR(255) NOT NULL,
  c5 VARCHAR(255) NOT NULL,
  c6 VARCHAR(255) NOT NULL,
  FOREIGN KEY (c1) REFERENCES genshin_c1(c1),
  FOREIGN KEY (c2) REFERENCES genshin_c2(c2),
  FOREIGN KEY (c3) REFERENCES genshin_c3(c3),
  FOREIGN KEY (c4) REFERENCES genshin_c4(c4),
  FOREIGN KEY (c5) REFERENCES genshin_c5(c5),
  FOREIGN KEY (c6) REFERENCES genshin_c6(c6)
)
COMMENT='Liste des constellations des différents personnages dans Genshin Impact.'
;