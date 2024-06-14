  CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    avatar TEXT,
    UNIQUE(username, email),
    PRIMARY KEY (id)
  );

  CREATE TABLE IF NOT EXISTS artist (
    id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    avatar TEXT,
    UNIQUE(name),
    PRIMARY KEY (id)
  );

  CREATE TABLE IF NOT EXISTS album (
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    cover TEXT,
    artist_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (artist_id) REFERENCES artist(id)),
  );

  CREATE TABLE IF NOT EXISTS song (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    object_id VARCHAR(100) NOT NULL,
    duration INT NOT NULL,
    PRIMARY KEY (id)
  );

  CREATE TABLE IF NOT EXISTS song_album (
    song_id INT,
    album_id INT,
    PRIMARY KEY (song_id, album_id),
    FOREIGN_KEY (album_id) REFERENCES album(id),
    FOREIGN KEY (song_id REFERENCES song(id),
  );

  CREATE TABLE IF NOT EXISTS entity (
    id INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    UNIQUE (name),
    PRIMARY KEY (id)
  );

  CREATE TABLE IF NOT EXISTS like_entity (
    entity_id INT,
    like_id INT,
    user_id INT
    PRIMARY KEY (entity_id, like_id, user_id),
    FOREIGN KEY (entity_id) REFERENCES entity(id),
    FOREIGN KEY (user_id) REFERENCES user(id),
  );

  CREATE TABLE IF NOT EXISTS playlist(
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    cover TEXT,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id),
  );

  CREATE TABLE IF NOT EXISTS playlist_song (
    playlist_id INT,
    song_id INT,
    PRIMARY KEY (playlist_id, song_id),
    FOREIGN KEY (playlist_id) REFERENCES playlist(id),
    FOREIGN KEY (song_id) REFERENCES song(id),
  );

  CREATE TABLE IF NOT EXISTS state (
    user_id INT,
    song_id INT,
    timestampt INT,
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES user(id)
    FOREIGN KEY (song_id) REFERENCES song(id)
  );

  CREATE TABLE IF NOT EXISTS jam (
    id VARCHAR(36) NOT NULL,
    song_id INT,
    timestampt INT,
    UNIQUE(id),
    PRIMARY KEY (id),
    FOREIGN KEY (song_id) REFERENCES song(id)
  );

  CREATE TABLE IF NOT EXISTS jam_user (
    jam_id VARCHAR(36) NOT NULL,
    user_id INT NOT NULL,
    UNIQUE (user_id),
    PRIMARY KEY (jam_id, user_id),
    FOREIGN KEY (jam_id) REFERENCES jam(id),
    FOREIGN KEY (user_id) REFERENCES user(id),
  );

  CREATE TABLE IF NOT EXISTS play_queue (
    user_id INT,
    song_id INT,
    FOREIGN KEY (song_id) REFERENCES song(id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
  )

  CREATE TABLE IF NOT EXISTS jam_play_queue (
    jam_id INT,
    song_id INT,
    FOREIGN KEY (song_id) REFERENCES song(id),
    FOREIGN KEY (jam_id) REFERENCES jam(id),
  )
