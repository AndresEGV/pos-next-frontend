export async function POST(request: Request) {
  const coupon = await request.json();
  const url = `${process.env.API_URL}/coupons/apply-coupon`;
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(coupon),
  });
  const res = await req.json();
  console.log(res);
  return Response.json({ ...res, status: req.status });
}
