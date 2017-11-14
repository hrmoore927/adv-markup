-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2013 at 08:38 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ajaxdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartoons_car`
--

CREATE TABLE IF NOT EXISTS `cartoons_car` (
  `id_car` int(11) NOT NULL AUTO_INCREMENT,
  `name_car` varchar(255) NOT NULL,
  PRIMARY KEY (`id_car`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `cartoons_car`
--

INSERT INTO `cartoons_car` (`id_car`, `name_car`) VALUES
(1, 'Flintstones'),
(2, 'Jetsons'),
(3, 'SpongeBob SquarePants'),
(4, 'Looney Tunes'),
(5, 'Family Guy'),
(6, 'Scooby-Doo'),
(7, 'Peanuts'),
(8, 'Mickey Mouse'),
(9, 'Wallace & Gromit'),
(10, 'Rocky & Bullwinkle'),
(11, 'Simpsons'),
(12, 'Nightmare Before Christmas');

-- --------------------------------------------------------

--
-- Table structure for table `characters_cha`
--

CREATE TABLE IF NOT EXISTS `characters_cha` (
  `id_cha` int(11) NOT NULL AUTO_INCREMENT,
  `id_car_cha` int(11) NOT NULL,
  `name_cha` varchar(255) NOT NULL,
  `pet_cha` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_cha`),
  KEY `cartoon_id_cha` (`id_car_cha`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Dumping data for table `characters_cha`
--

INSERT INTO `characters_cha` (`id_cha`, `id_car_cha`, `name_cha`, `pet_cha`) VALUES
(1, 1, 'Fred', 0),
(2, 1, 'Wilma', 0),
(3, 1, 'Barney', 0),
(4, 1, 'Betty', 0),
(5, 1, 'Pebbles', 0),
(6, 1, 'Bam-Bam', 0),
(7, 1, 'Dino', 1),
(8, 2, 'George', 0),
(9, 2, 'Jane', 0),
(10, 2, 'Judy', 0),
(11, 2, 'Elroy', 0),
(12, 2, 'Astro', 1),
(13, 3, 'SpongeBob', 0),
(14, 3, 'Gary the Snail', 1),
(15, 4, 'Granny', 0),
(16, 4, 'Tweety Bird', 0),
(17, 5, 'Peter', 0),
(18, 5, 'Louis', 0),
(19, 5, 'Stewie', 0),
(20, 5, 'Meg', 0),
(21, 5, 'Chris', 0),
(22, 5, 'Brian', 1),
(23, 6, 'Shaggy', 0),
(24, 6, 'Scooby-Doo', 1),
(25, 6, 'Fred', 0),
(26, 6, 'Velma', 0),
(27, 6, 'Daphne', 0),
(28, 7, 'Charlie Brown', 0),
(29, 7, 'Snoopy', 1),
(30, 7, 'Linus', 0),
(31, 7, 'Lucy', 0),
(32, 7, 'Peppermint Patty', 0),
(33, 8, 'Mickey Mouse', 0),
(34, 8, 'Pluto', 1),
(35, 9, 'Wallace', 0),
(36, 9, 'Gromit', 1),
(37, 10, 'Rocky', 0),
(38, 10, 'Bullwinkle', 0),
(39, 10, 'Sherman', 1),
(40, 10, 'Mr. Peabody', 0),
(41, 11, 'Homer', 0),
(42, 11, 'Bart', 0),
(43, 11, 'Lisa', 0),
(44, 11, 'Marge', 0),
(45, 11, 'Maggie', 0),
(46, 11, 'Santa''s Little Helper', 0),
(47, 12, 'Jack Skellington', 0),
(48, 12, 'Zero', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
