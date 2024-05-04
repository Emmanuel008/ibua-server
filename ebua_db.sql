-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2024 at 02:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebua_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `faq_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `faq_question` varchar(255) NOT NULL,
  `faq_answer` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`faq_id`, `faq_question`, `faq_answer`, `createdAt`, `updatedAt`) VALUES
('1d8cabac-ba0e-4eb9-baba-5d767295ace8', 'Is there different between innovation and innvention?', 'YES, these are two different concepts, though the two terms may sound alike. Common differences include: a. Invention is the occurrence of an idea for a product or process that has never been made before. While Innovation is the about practical implementa', '2024-05-01 09:00:58', '2024-05-01 09:00:58'),
('77f2e05f-e641-4643-8af7-7b609baffbdb', 'What is innovation?', 'An innovation is a new or improved product or process (or combination thereof) that differs significantly from the unit\'s previous products or processes and that has been made available to potential users (product) or brought into use by the unit (process', '2024-05-01 08:59:57', '2024-05-01 08:59:57'),
('c62513fd-b5c7-4d8e-a2d6-efe579b6f063', 'What is innvention?', 'An Invention means the creation of a brand-new product or device; creation of a product or introduction of a process for the first time..', '2024-05-01 09:00:19', '2024-05-01 09:00:19');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `image_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `image_description` varchar(255) NOT NULL,
  `image_title` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `image_description`, `image_title`, `image_path`, `createdAt`, `updatedAt`) VALUES
('cc4333b9-c754-4c19-8f94-c8b0e15c86ca', 'iBUA Innovation Hub is a dynamic initiative in Maruhubi, Zanzibar, fostering innovation and entrepreneurship', 'iBUA Innovation Hub', 'imgae-1714553851590.COSTECH-14 - Copy.jpg', '2024-05-01 08:57:31', '2024-05-01 08:57:31');

-- --------------------------------------------------------

--
-- Table structure for table `testimonies`
--

CREATE TABLE `testimonies` (
  `testimony_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `testimony_content` varchar(255) NOT NULL,
  `testimony_author` varchar(255) NOT NULL,
  `author_postion` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonies`
--

INSERT INTO `testimonies` (`testimony_id`, `testimony_content`, `testimony_author`, `author_postion`, `image_path`, `createdAt`, `updatedAt`) VALUES
('080331aa-0c9d-4d3e-a425-5c99043d4570', 'Naishukuru serikali kupitia iBUA kwa ufuatiliaji na utekelezaji wenye matokeo chanya ', 'Emmanuel Jeremy', 'Mbunifu', 'imgae-1714554210259.COSTECH-19 - Copy.jpg', '2024-05-01 09:03:30', '2024-05-01 09:03:30'),
('236ea913-67be-4002-8ec6-6b56221d5c69', 'iBUA Hub imenishika mkono kunisaidia katika hatua zangu za kibunifu', 'Sharmila Hassan', 'Mbunifu', 'imgae-1714554133936.COSTECH-14 - Copy.jpg', '2024-05-01 09:02:13', '2024-05-01 09:02:13'),
('d2601873-4d4f-4c45-97c8-23f8dc13349c', 'Naishukuru serikali kupitia iBUA kwa ufuatiliaji na utekelezaji wenye matokeo chanya', 'Hamisa Juma', 'Mbunifu', 'imgae-1714554264293.COSTECH-14 - Copy.jpg', '2024-05-01 09:04:24', '2024-05-01 09:04:24');

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

CREATE TABLE `updates` (
  `update_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `update_title` varchar(255) NOT NULL,
  `update_description` varchar(255) NOT NULL,
  `update_link` varchar(255) DEFAULT NULL,
  `update_image_path` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`update_id`, `update_title`, `update_description`, `update_link`, `update_image_path`, `createdAt`, `updatedAt`) VALUES
('99f94c94-cc76-421c-b430-1956d980abdf', 'Talent Pool', 'Specialized initiative designed to identify, nurture, and develop exceptional talent in various fields within the Zanzibar innovation ecosystem', 'http://localhost:8085', 'imgae-1714553360159.COSTECH-14 - Copy.jpg', '2024-05-01 08:49:20', '2024-05-01 08:49:20'),
('a9d13b6d-2ca5-4469-a60f-72943f637c26', 'Training Management', 'Aims to equip entrepreneurs, innovators, and business leaders with the skills, knowledge, and tools necessary to effectively manage and grow their ventures.', 'http://localhost:8085', 'imgae-1714553329130.COSTECH-19 - Copy.jpg', '2024-05-01 08:48:49', '2024-05-01 08:48:49'),
('f5d4441e-6cd6-4a63-b8b4-fdb1c6e76775', 'Stakeholder Engagement', 'iBUA Hub actively involves and communicates with individuals, groups, and organizations that have a vested interest or are affected by its activities.', 'http://localhost:8085', 'imgae-1714553187463.COSTECH-14 - Copy.jpg', '2024-05-01 08:46:27', '2024-05-01 08:46:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `username`, `password`, `email`, `phone`, `createdAt`, `updatedAt`) VALUES
('b63df413-ea72-4d6e-baf5-9dc6526e9ff3', 'Godwin', 'Makyao', 'Admin', '$2b$10$qV/tRqJKWreP/SzXRyGgW.MMbRA3FPNxIPD29agZD7ps9Io80qgnK', 'godwinnamwel@gmail.com', NULL, '2024-04-30 06:28:28', '2024-04-30 12:07:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`faq_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `testimonies`
--
ALTER TABLE `testimonies`
  ADD PRIMARY KEY (`testimony_id`);

--
-- Indexes for table `updates`
--
ALTER TABLE `updates`
  ADD PRIMARY KEY (`update_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
