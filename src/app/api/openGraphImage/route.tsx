import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import OpenGraphImage from "./OpenGraphImage";
import { OPEN_GRAPH_IMAGE_DIMENSIONS } from "../../../utils/seo";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title") ?? "Variant";
  const description = searchParams.get("description");
  return new ImageResponse(
    <OpenGraphImage title={title} description={description ?? undefined} />,
    {
      width: OPEN_GRAPH_IMAGE_DIMENSIONS.width,
      height: OPEN_GRAPH_IMAGE_DIMENSIONS.height,
    },
  );
}
