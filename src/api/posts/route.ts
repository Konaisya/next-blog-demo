import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const json = await resp.json()
    return NextResponse.json(json, { status: resp.status })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
