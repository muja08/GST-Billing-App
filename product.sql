-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2018 at 04:43 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `b_id` varchar(50) NOT NULL,
  `product_code` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `gst` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `product_price` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`b_id`, `product_code`, `product_name`, `price`, `gst`, `quantity`, `product_price`) VALUES
('1', 'PERFUME 15', 'AXE', '285', '18', '10', '3360'),
('1', 'SOAP123', 'HAMAM', '35', '12', '10', '390'),
('1', 'DATES01', 'LION DATES', '89', '8', '5', '480'),
('3', 'DATES01', 'LION DATES', '89', '8', '5', '480'),
('25', 'DATES01', 'LION DATES', '89', '8', '5', '480'),
('25', 'DATES01', 'LION DATES', '89', '8', '5', '480'),
('25', 'SOAP123', 'HAMAM', '35', '12', '5', '195'),
('25', 'SOAP123', 'HAMAM', '35', '12', '5', '195');

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `product_code` varchar(30) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `price` varchar(30) NOT NULL,
  `gst` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`product_code`, `product_name`, `price`, `gst`) VALUES
('DATES01', 'LION DATES', '89', '8'),
('NUTRITION45', 'ARUN BADAMS', '158', '18'),
('PERFUME 14', 'FOOG', '225', '18'),
('PERFUME 15', 'AXE', '285', '18'),
('SHAMPOO12', 'Pantine', '15', '2'),
('SHAMPOO79', 'Clinic All Clear', '45', '18'),
('SOAP123', 'HAMAM', '35', '12'),
('SOAP68', 'LIFEBOhgghY', '12', '8');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`product_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
