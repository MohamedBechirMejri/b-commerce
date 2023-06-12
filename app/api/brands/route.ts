import { NextResponse } from "next/server";

import { createBrand, getAllBrands } from "~/lib/db/brand";

export async function GET() {
  const data = await getAllBrands();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const { brand } = await request.json();

  const data = await createBrand(brand);

  return NextResponse.json({ data });
}
