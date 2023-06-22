import { NextResponse } from "next/server";

import { getProductById } from "~/lib/db/product";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const data = await getProductById(id);

  return NextResponse.json({ data });
}

// export async function POST(request: Request) {
//   const body = await request.json();

//   const data = await createProduct(body);

//   return NextResponse.json({ data });
// }
