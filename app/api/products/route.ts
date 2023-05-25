import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.product.findMany();

  return NextResponse.json({ data });
}
