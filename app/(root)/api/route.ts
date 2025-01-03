export const runtime = "nodejs"; // Use Node.js runtime to avoid Edge issues
export const dynamic = "force-dynamic"; // Optional, if the route needs dynamic behavior

export async function GET(req: Request) {
  const headers = req.headers;
  const cookies = req.headers.get("cookie");

  console.log("Headers:", headers);
  console.log("Cookies:", cookies);

  return new Response(
    JSON.stringify({
      message: "Debug info",
      headers: Object.fromEntries(headers),
      cookies,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
