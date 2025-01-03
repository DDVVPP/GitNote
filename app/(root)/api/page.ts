export default function handler(req: any, res: any) {
  console.log("Headers:", req.headers);
  console.log("Cookies:", req.cookies);

  res.status(200).json({
    message: "Debug info",
    headers: req.headers,
    cookies: req.cookies,
  });
}
