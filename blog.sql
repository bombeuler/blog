CREATE TABLE `blog_user` (
 `id` int(6) NOT NULL AUTO_INCREMENT,
 `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
 `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 `salt` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
