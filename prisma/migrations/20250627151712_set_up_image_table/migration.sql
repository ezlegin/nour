/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `size` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_imageId_fkey`;

-- AlterTable
ALTER TABLE `image` ADD COLUMN `productId` INTEGER NULL,
    ADD COLUMN `size` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Image_productId_key` ON `Image`(`productId`);

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
