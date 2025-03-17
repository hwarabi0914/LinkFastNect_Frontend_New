export default async function fetchCustomers() {
  console.log("🔍 Fetching all customers...");
  console.log("🔍 API Endpoint:", process.env.NEXT_PUBLIC_API_ENDPOINT + "/allcustomers");

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/allcustomers", {
      cache: "no-cache",
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch customers, Status Code:", res.status);
      throw new Error("Failed to fetch customers");
    }

    const data = await res.json();
    console.log("✅ Successfully fetched customers data:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching customers:", error);
    throw error;
  }
}
