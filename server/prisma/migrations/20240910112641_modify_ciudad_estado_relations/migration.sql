-- AlterTable
ALTER TABLE `ciudad` ADD COLUMN `estadoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Ciudad` ADD CONSTRAINT `Ciudad_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `Estado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
