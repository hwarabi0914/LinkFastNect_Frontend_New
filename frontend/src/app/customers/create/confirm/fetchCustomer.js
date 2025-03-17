export default async function fetchCustomer(id) {
  const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT + `/customers?customer_id=${id}`;
  
  console.log("Fetching:", apiUrl);  // ✅ APIのリクエストURLを確認

  const res = await fetch(apiUrl, { cache: "no-cache" });

  if (!res.ok) {
    console.error("❌ Failed to fetch customer:", res.status, res.statusText);
    throw new Error("Failed to fetch customer");
  }

  const data = await res.json();
  console.log("✅ API Response:", data);  // ✅ APIのレスポンスを確認
  return data;
}
