/*
  Warnings:

  - You are about to drop the column `item` on the `Leilao` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Lance` table. All the data in the column will be lost.
  - Added the required column `dataLimite` to the `Leilao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `donoId` to the `Leilao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Leilao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produto` to the `Leilao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `compradorId` to the `Lance` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Leilao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "dataLimite" DATETIME NOT NULL,
    "donoId" INTEGER NOT NULL,
    CONSTRAINT "Leilao_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("id") SELECT "id" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
CREATE TABLE "new_Lance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "compradorId" INTEGER NOT NULL,
    "leilaoId" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lance" ("id", "leilaoId", "valor") SELECT "id", "leilaoId", "valor" FROM "Lance";
DROP TABLE "Lance";
ALTER TABLE "new_Lance" RENAME TO "Lance";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
