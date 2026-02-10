import { db } from "@/lib/drizzle/client";
import { leads } from "@/lib/drizzle/schema";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  await db.insert(leads).values({
    name: body.name,
    mobile: body.mobile,
    qualification: body.qualification,
    state: body.state,
    whatsappUpdates: body.whatsappUpdates,
  });

  return NextResponse.json({ success: true });
}
