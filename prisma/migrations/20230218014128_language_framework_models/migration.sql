/*
  Warnings:

  - You are about to drop the `FrameworkOptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FrameworkOptions";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Framework" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "framework" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,
    CONSTRAINT "Framework_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
