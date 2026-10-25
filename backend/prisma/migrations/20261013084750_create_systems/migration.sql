-- CreateTable
CREATE TABLE "systems" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "link" TEXT NOT NULL,

    CONSTRAINT "systems_pkey" PRIMARY KEY ("id")
);
