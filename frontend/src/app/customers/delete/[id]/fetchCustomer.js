export default async function fetchCustomer(id) {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/customers?customer_id=${id}`;
  
  console.log("🔍 Fetching customer data...");
  console.log("🔍 API Endpoint:", url);
  
  try {
    const res = await fetch(url, { 
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) {
      console.error(`❌ Failed to fetch customer, Status Code: ${res.status}`);
      const errorText = await res.text(); // エラーの詳細を取得
      console.error(`❌ Error Response: ${errorText}`);
      throw new Error("Failed to fetch customer");
    }

    const data = await res.json();
    console.log("✅ Successfully fetched customer data:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching customer:", error);
    throw error;
  }
}
