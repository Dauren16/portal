-- CreateTable
CREATE TABLE "softwares" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "fileName" TEXT NOT NULL,

    CONSTRAINT "softwares_pkey" PRIMARY KEY ("id")
);
