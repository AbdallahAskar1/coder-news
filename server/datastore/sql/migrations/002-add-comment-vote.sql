CREATE TABLE comments (
  id      VARCHAR NOT NULL PRIMARY KEY,
  userId  VARCHAR NOT NULL,
  postId  VARCHAR NOT NULL,
  comment VARCHAR NOT NULL, 
  parent  INTGER  NOT NUll DEFAULT 0,
  postedAt INTEGER NOT NULL,
  FOREIGN KEY (userId) REFERENCES users (id),
  FOREIGN KEY (PostId) REFERENCES posts (id)
);

CREATE TABLE post_votes (
  userId    VARCHAR NOT NULL,
  postId    VARCHAR NOT NULL,
  voteType  INTEGER CHECK(voteType = -1 OR voteType = 1),-- (1, -1)
  FOREIGN   KEY (userId) REFERENCES users (id),
  FOREIGN   KEY (postId) REFERENCES posts (id),
  PRIMARY   KEY (userId, postId)
);