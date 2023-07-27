import { NextRequest, NextResponse } from "next/server";

import prisma from "~/lib/db/prisma";
import { createProduct } from "~/lib/db/product";

export async function GET({ nextUrl }: NextRequest) {
  const getParam = (key: string) => nextUrl.searchParams.get(key);

  if (getParam("latest")) {
    const data = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });
    return NextResponse.json({ data });
  }

  // if (getParam("top_rated")) {
  //   const data = await prisma.product.findMany({
  //     orderBy: { rating: "desc" },
  //     take: 10,
  //   });
  //   return NextResponse.json({ data });
  // }

  // if (getParam("best_sellers")) {
  //   const data = await prisma.product.findMany({
  //     orderBy: { sold: "desc" },
  //     take: 10,
  //   });
  //   return NextResponse.json({ data });
  // }

  const data = await prisma.product.findMany();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();

  const data = await createProduct(body);

  return NextResponse.json({ data });
}
