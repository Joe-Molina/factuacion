/*
  Warnings:

  - You are about to drop the column `contrasena` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `tipoUsuario` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `usuario` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `password` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_usuario` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `contrasena`,
    DROP COLUMN `tipoUsuario`,
    DROP COLUMN `usuario`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipo_usuario` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `iniciosDeSesion` ADD CONSTRAINT `iniciosDeSesion_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
