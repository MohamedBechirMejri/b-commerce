import { NextResponse } from "next/server";

import prisma from "~/lib/db/prisma";
import { createProduct } from "~/lib/db/product";

export async function GET() {
  const data = await prisma.product.findMany();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();

  const data = await createProduct(body);

  return NextResponse.json({ data });
}
