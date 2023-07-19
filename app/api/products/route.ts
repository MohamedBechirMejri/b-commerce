import { NextRequest, NextResponse } from "next/server";

import prisma from "~/lib/db/prisma";
import { createProduct } from "~/lib/db/product";

export async function GET({ nextUrl }: NextRequest) {
  if (nextUrl.searchParams.get("latest")) {
    const data = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    return NextResponse.json({ data });
  }
  const data = await prisma.product.findMany();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();

  const data = await createProduct(body);

  return NextResponse.json({ data });
}
