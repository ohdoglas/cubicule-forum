/*
  Warnings:

  - You are about to drop the column `completed_ata` on the `InitialSetup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "InitialSetup" DROP COLUMN "completed_ata",
ADD COLUMN     "completed_at" TIMESTAMP(3);
