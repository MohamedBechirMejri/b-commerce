import { NextResponse } from "next/server";

import { createCategory, getAllCategories } from "~/lib/db/category";

export async function GET() {
  const data = await getAllCategories();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const { category } = await request.json();

  const data = await createCategory(category);

  return NextResponse.json({ data });
}
