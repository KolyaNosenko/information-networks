-- CreateTable
CREATE TABLE "AuthSession" (
    "id" UUID NOT NULL,
    "accountId" UUID NOT NULL,
    "access_token" TEXT NOT NULL,
    "access_token_expires_at" TIMESTAMP(3) NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "refresh_token_expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthSession_access_token_key" ON "AuthSession"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "AuthSession_refresh_token_key" ON "AuthSession"("refresh_token");

-- AddForeignKey
ALTER TABLE "AuthSession" ADD CONSTRAINT "AuthSession_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
