-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2025 at 05:37 PM
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
-- Database: `intern`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_sharing_agreements`
--

CREATE TABLE `data_sharing_agreements` (
  `id` int(11) NOT NULL,
  `organization` varchar(255) NOT NULL,
  `terms` text NOT NULL,
  `status` enum('pending','approved','rejected') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `threats`
--

CREATE TABLE `threats` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `reported_by` int(11) NOT NULL,
  `threat_type` enum('spam','harassment','security_risk') NOT NULL,
  `description` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `category` enum('Cyber Threats','Personal Threats','Scams & Fraud','Physical Threats','Illegal Content','Misinformation','Copyright Violation','Workplace Threats') NOT NULL,
  `severity` enum('Low','Medium','High','Critical') NOT NULL,
  `status` enum('pending','reviewed','resolved') DEFAULT 'pending',
  `votes` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `stix_data` varchar(255) DEFAULT NULL,
  `pattern` text DEFAULT NULL,
  `valid_from` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `threats`
--

INSERT INTO `threats` (`id`, `user_id`, `reported_by`, `threat_type`, `description`, `url`, `category`, `severity`, `status`, `votes`, `created_at`, `stix_data`, `pattern`, `valid_from`) VALUES
(5, 3, 3, 'security_risk', 'Suspicious login attempts detected.', NULL, 'Cyber Threats', 'Low', 'pending', 0, '2025-02-09 09:13:07', NULL, NULL, NULL),
(6, 3, 3, 'security_risk', 'Suspicious login attempts detected.', NULL, 'Cyber Threats', 'Low', 'pending', 2, '2025-02-09 09:20:00', NULL, NULL, NULL),
(7, 1, 3, '', 'Fake banking website trying to steal credentials.', NULL, 'Cyber Threats', 'Low', 'pending', 1, '2025-02-09 12:16:34', '{\"indicator\":{\"type\":\"indicator\",\"id\":\"indicator--a2bc1678-bbef-4ede-8c9b-492090087f46\",\"created\":\"2025-02-09T12:16:34.764Z\",\"modified\":\"2025-02-09T12:16:34.764Z\",\"name\":\"Threat Indicator - Phishing\",\"description\":\"Fake banking website trying to steal cre', NULL, NULL),
(8, 3, 3, 'harassment', 'this is a descriptioin', NULL, 'Cyber Threats', 'Low', 'pending', 0, '2025-02-09 15:38:50', '{\"indicator\":{\"type\":\"indicator\",\"id\":\"indicator--b4a104f7-c27c-4455-b7d7-55da8b91c377\",\"created\":\"2025-02-09T15:38:50.266Z\",\"modified\":\"2025-02-09T15:38:50.266Z\",\"name\":\"Threat Indicator - harassment\",\"description\":\"this is a descriptioin\",\"pattern\":\"[ur', NULL, NULL),
(9, 3, 3, 'harassment', 'dont harrass', NULL, 'Cyber Threats', 'Low', 'pending', 1, '2025-02-09 15:39:17', '{\"indicator\":{\"type\":\"indicator\",\"id\":\"indicator--6dca9cdd-b7b2-4dd8-bb59-529b0369fc79\",\"created\":\"2025-02-09T15:39:17.861Z\",\"modified\":\"2025-02-09T15:39:17.861Z\",\"name\":\"Threat Indicator - harassment\",\"description\":\"dont harrass\",\"pattern\":\"[url:value = ', NULL, NULL),
(10, 3, 3, '', 'Fake banking website trying to steal credentials.', NULL, 'Cyber Threats', 'Low', 'pending', 0, '2025-02-09 15:56:06', '{\"indicator\":{\"type\":\"indicator\",\"id\":\"indicator--e33a65c5-074b-476f-98f6-1caf14e426a1\",\"created\":\"2025-02-09T15:56:06.120Z\",\"modified\":\"2025-02-09T15:56:06.121Z\",\"name\":\"Threat Indicator - Phishing\",\"description\":\"Fake banking website trying to steal cre', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `threat_comments`
--

CREATE TABLE `threat_comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `threat_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `threat_comments`
--

INSERT INTO `threat_comments` (`id`, `user_id`, `threat_id`, `comment`, `created_at`) VALUES
(2, 3, 5, 'This should be investigated immediately!', '2025-02-09 09:19:32'),
(3, 3, 5, 'This is spam', '2025-02-09 09:19:46'),
(4, 3, 5, 'no\n', '2025-02-09 14:34:48'),
(5, 3, 5, 'no\n', '2025-02-09 14:34:49'),
(6, 3, 5, 'no\n', '2025-02-09 14:34:56'),
(7, 3, 5, 'no\n', '2025-02-09 14:34:56'),
(8, 3, 5, 'no\n', '2025-02-09 14:35:27'),
(9, 3, 5, 'samad is a good boy\n', '2025-02-09 14:50:49'),
(10, 3, 5, 'samad\n', '2025-02-09 14:51:24'),
(11, 3, 5, 'samad\n', '2025-02-09 14:51:28'),
(12, 3, 5, 'samad\n', '2025-02-09 14:51:29'),
(13, 3, 5, 'sss', '2025-02-09 14:55:54'),
(14, 3, 5, 'dd', '2025-02-09 14:57:41'),
(15, 3, 5, 'dd', '2025-02-09 14:57:42'),
(16, 3, 5, 'dd', '2025-02-09 14:57:43'),
(17, 3, 5, 'dd', '2025-02-09 14:57:55'),
(18, 3, 5, 'dd', '2025-02-09 14:57:56'),
(19, 3, 5, 'svdfv', '2025-02-09 14:57:59'),
(20, 3, 5, 'svdfv', '2025-02-09 14:58:37'),
(21, 3, 5, 'svdfv', '2025-02-09 14:58:39'),
(22, 3, 5, 'svdfv', '2025-02-09 14:58:39'),
(23, 3, 5, 'svdfv', '2025-02-09 14:59:03');

-- --------------------------------------------------------

--
-- Table structure for table `threat_votes`
--

CREATE TABLE `threat_votes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `threat_id` int(11) NOT NULL,
  `vote` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `threat_votes`
--

INSERT INTO `threat_votes` (`id`, `user_id`, `threat_id`, `vote`) VALUES
(2, 3, 5, -1),
(3, 3, 6, -1),
(4, 3, 7, 1),
(5, 3, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('admin','analyst','viewer') DEFAULT 'viewer',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `role`, `created_at`) VALUES
(1, '', 'testuser@example.com', '$2b$10$Iv8rugefB3aDgmVwtPs34OVaX3Q4Ht.N1sM/DfwIzKhWlXxjhsNLK', 'viewer', '2025-02-02 13:00:39'),
(2, 'samad', 'testuser2@example.com', '$2b$10$byJxGXdXmt70tunBVRd5Ru35H4IA/JkVZyvt/6wI6qqwMQ3u5dvAK', 'viewer', '2025-02-02 13:08:39'),
(3, 'samad_sayyed', 'samadsayyed812@gmail.com', '$2b$10$LeUoRWSzGBJBWf4cUmTcJ.EMKPM0JmPb0xGZJpH2ATG7QuJ8.e/pu', 'viewer', '2025-02-09 09:06:44'),
(4, 'samad_jhb', 'samadsayyed819@gmail.com', '$2b$10$NgZ.TyraN7xx9iBg2E6oS.QWuoEjY.G4bhRVRO3vaHeNQ4AZM54De', 'viewer', '2025-02-09 14:03:19'),
(5, 'admin', 'samadsayyed815@gmail.com', '$2b$10$1fHni0c9Bzq4RclTmkzen.KgI/jj4pjB/L7E9sXZ2ahkiOgKqciYG', 'viewer', '2025-02-09 14:03:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_sharing_agreements`
--
ALTER TABLE `data_sharing_agreements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `threats`
--
ALTER TABLE `threats`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stix_id` (`stix_data`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `reported_by` (`reported_by`);

--
-- Indexes for table `threat_comments`
--
ALTER TABLE `threat_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `threat_id` (`threat_id`);

--
-- Indexes for table `threat_votes`
--
ALTER TABLE `threat_votes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`threat_id`),
  ADD KEY `threat_id` (`threat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_sharing_agreements`
--
ALTER TABLE `data_sharing_agreements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `threats`
--
ALTER TABLE `threats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `threat_comments`
--
ALTER TABLE `threat_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `threat_votes`
--
ALTER TABLE `threat_votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `threats`
--
ALTER TABLE `threats`
  ADD CONSTRAINT `threats_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `threats_ibfk_2` FOREIGN KEY (`reported_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `threat_comments`
--
ALTER TABLE `threat_comments`
  ADD CONSTRAINT `threat_comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `threat_comments_ibfk_2` FOREIGN KEY (`threat_id`) REFERENCES `threats` (`id`);

--
-- Constraints for table `threat_votes`
--
ALTER TABLE `threat_votes`
  ADD CONSTRAINT `threat_votes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `threat_votes_ibfk_2` FOREIGN KEY (`threat_id`) REFERENCES `threats` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
