-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT,
    "age" INTEGER,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
