import { NextResponse } from "next/server";

import { getProductById, updateProduct } from "~/lib/db/product";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const data = await getProductById(id);

  return NextResponse.json({ data });
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();

  const data = await updateProduct(id, body);

  return NextResponse.json({ data });
}
