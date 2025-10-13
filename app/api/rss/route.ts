import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const mediumUsername = "madinaabdullayeva515";
    const mediumFeedUrl = `https://medium.com/feed/@${mediumUsername}`;
    const feed = await parser.parseURL(mediumFeedUrl);
    return NextResponse.json(feed.items, { status: 200 }); // Send parsed articles as JSON
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
