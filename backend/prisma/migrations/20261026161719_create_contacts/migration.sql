-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "emails" TEXT[],
    "phones" TEXT[],

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);
