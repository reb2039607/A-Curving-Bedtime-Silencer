 create DATABASE freelance; 

# Table, Create TableTask,
 CREATE TABLE `Task` (
  `idtask` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `tasktime` varchar(20) NOT NULL,
  `rewardpoints` int(11) NOT NULL,
  `skillsrequired` varchar(100) NOT NULL,
  `taskstatus` varchar(10) DEFAULT NULL,
  `skilllevel` varchar(12) NOT NULL,
  `userid` int(11) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  PRIMARY KEY (`idtask`),
  KEY `userID_idx` (`userid`),
  CONSTRAINT `userID` FOREIGN KEY (`userid`) REFERENCES `userlogin` (`userid`)
) ;

# Table, Create Table userlogin,
 CREATE TABLE `userlogin` (
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ;

# Table, Create TableTaskassigned,
 CREATE TABLE `Taskassigned` (
  `userid` int(11) DEFAULT NULL,
  `idtask` int(11) NOT NULL,
  `actualstartDate` date NOT NULL,
  `actualenddate` date NOT NULL,
  KEY `taskID_idx` (`idtask`),
  KEY `UserIDTask_idx` (`userid`),
  CONSTRAINT `UserIDTask` FOREIGN KEY (`userid`) REFERENCES `userlogin` (`userid`),
  CONSTRAINT `taskID` FOREIGN KEY (`idtask`) REFERENCES `task` (`idtask`)
) ;