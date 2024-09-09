-- DropForeignKey
ALTER TABLE `cliente` DROP FOREIGN KEY `Cliente_direccionId_fkey`;

-- AlterTable
ALTER TABLE `cliente` MODIFY `direccionId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
