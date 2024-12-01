/*
  Warnings:

  - You are about to drop the column `access_token` on the `AuthSession` table. All the data in the column will be lost.
  - You are about to drop the column `access_token_expires_at` on the `AuthSession` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `AuthSession` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `AuthSession` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token_expires_at` on the `AuthSession` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `AuthSession` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accessToken]` on the table `AuthSession` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[refreshToken]` on the table `AuthSession` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accessToken` to the `AuthSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accessTokenExpiresAt` to the `AuthSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshToken` to the `AuthSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshTokenExpiresAt` to the `AuthSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AuthSession_access_token_key";

-- DropIndex
DROP INDEX "AuthSession_refresh_token_key";

-- AlterTable
ALTER TABLE "AuthSession" DROP COLUMN "access_token",
DROP COLUMN "access_token_expires_at",
DROP COLUMN "created_at",
DROP COLUMN "refresh_token",
DROP COLUMN "refresh_token_expires_at",
DROP COLUMN "updated_at",
ADD COLUMN     "accessToken" TEXT NOT NULL,
ADD COLUMN     "accessTokenExpiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "refreshToken" TEXT NOT NULL,
ADD COLUMN     "refreshTokenExpiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "AuthSession_accessToken_key" ON "AuthSession"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "AuthSession_refreshToken_key" ON "AuthSession"("refreshToken");
