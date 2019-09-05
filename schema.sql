  CREATE DATABASE IF NOT EXISTS freelance ; 

   CREATE TABLE `userLogin` (
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `userid` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ;

  CREATE TABLE `masterTask` (
  `taskid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `taskduration` varchar(20) NOT NULL,
  `rewardpoints` int(11) NOT NULL,
  `skillsrequired` varchar(100) NOT NULL,
  `taskstatus` varchar(10) NOT NULL,
  `skilllevel` varchar(12) NOT NULL,
  `userid` int(11) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`taskid`)
) ;

 CREATE TABLE `userTask` (
  `userid` int(11) NOT NULL,
  `taskid` int(11) NOT NULL,
  `actualstartDate` date NOT NULL,
  `actualenddate` date NOT NULL,
  `taskstatus` varchar(10) NOT NULL,
   `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`taskid`,`userid`)
) ;

 CREATE TABLE `taskResponse` (
  `userid` int(11) NOT NULL,
  `taskid` int(11) NOT NULL,
  `taskrespid` int(11)  NOT NULL AUTO_INCREMENT,
  `taskrespnotes` VARCHAR(255) NOT NULL,
  `taskrespcode` varchar(10) NOT NULL,
   `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`taskid`,`userid`,`taskrespid`)
) ;




