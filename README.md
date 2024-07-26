SQL Table Creation:

CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('null','approved','rejected','hold') DEFAULT 'null',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |

CREATE TABLE `TemporaryInfo` (
  `temp_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `contact_address1` varchar(255) DEFAULT NULL,
  `contact_address2` varchar(255) DEFAULT NULL,
  `contact_city` varchar(100) DEFAULT NULL,
  `contact_state` varchar(100) DEFAULT NULL,
  `contact_postalCode` varchar(10) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `workingTrades` json DEFAULT NULL,
  `comments` text,
  PRIMARY KEY (`temp_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `temporaryinfo_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |

CREATE TABLE `PermanentInfo` (
  `user_id` int NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `contact_address1` varchar(255) DEFAULT NULL,
  `contact_address2` varchar(255) DEFAULT NULL,
  `contact_city` varchar(100) DEFAULT NULL,
  `contact_state` varchar(100) DEFAULT NULL,
  `contact_postalCode` varchar(10) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `workingTrades` json DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `permanentinfo_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |


1. DB Configuration:
in the .env file, configure the DB Settings -
DB_NAME=Auth
DB_USER=
DB_PASSWORD=
DB_HOST=
PORT=
EMAIL_USER=
EMAIL_PASS=

2. Testing Postman Link :
https://www.postman.com/payload-observer-99948880/workspace/auth-sharing/collection/33185886-a73a17ec-6357-425c-bc65-d2be4d7d74b7?action=share&creator=35958337# Promptly_Authentication-API
