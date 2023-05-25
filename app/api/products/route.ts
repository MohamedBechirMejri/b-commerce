import { NextResponse } from "next/server";

import prisma from "~/lib/db/prisma";

export async function GET() {
  const data = await prisma.product.findMany();

  return NextResponse.json({ data });
}
