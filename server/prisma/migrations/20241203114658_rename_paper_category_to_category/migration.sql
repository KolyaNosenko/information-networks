/*
  Warnings:

  - You are about to drop the `PaperCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PaperToPaperCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PaperToPaperCategory" DROP CONSTRAINT "_PaperToPaperCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_PaperToPaperCategory" DROP CONSTRAINT "_PaperToPaperCategory_B_fkey";

-- DropTable
DROP TABLE "PaperCategory";

-- DropTable
DROP TABLE "_PaperToPaperCategory";

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPaper" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPaper_AB_unique" ON "_CategoryToPaper"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPaper_B_index" ON "_CategoryToPaper"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToPaper" ADD CONSTRAINT "_CategoryToPaper_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPaper" ADD CONSTRAINT "_CategoryToPaper_B_fkey" FOREIGN KEY ("B") REFERENCES "Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;
