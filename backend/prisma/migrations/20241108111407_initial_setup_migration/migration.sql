-- CreateTable
CREATE TABLE "InitialSetup" (
    "id" UUID NOT NULL,
    "setupComplete" BOOLEAN NOT NULL DEFAULT false,
    "setupToken" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_ata" TIMESTAMP(3),

    CONSTRAINT "InitialSetup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InitialSetup_setupToken_key" ON "InitialSetup"("setupToken");
