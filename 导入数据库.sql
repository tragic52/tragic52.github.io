/*
 Navicat MySQL Data Transfer

 Source Server         : 朝
 Source Server Type    : MySQL
 Source Server Version : 50617
 Source Host           : localhost:3306
 Source Schema         : 钓鱼

 Target Server Type    : MySQL
 Target Server Version : 50617
 File Encoding         : 65001

 Date: 23/04/2021 17:01:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for mag
-- ----------------------------
DROP TABLE IF EXISTS `mag`;
CREATE TABLE `mag`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lynr` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of mag
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
