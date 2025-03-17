"use client";
import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";
import fetchCustomer from "./fetchCustomer";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmComponent />
    </Suspense>
  );
}

function ConfirmComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customer_id = searchParams.get("customer_id");
  const [customer, setCustomer] = useState(null);

  console.log("🔍 customer_id:", customer_id); // 🚀 customer_id をログに出力

  useEffect(() => {
    const fetchAndSetCustomer = async () => {
      if (customer_id) {
        console.log("🚀 Calling fetchCustomer with ID:", customer_id); // ✅ fetchCustomer が呼ばれるか確認
        try {
          const customerData = await fetchCustomer(customer_id);
          console.log("✅ Fetch successful, data:", customerData); // ✅ APIのレスポンスを表示
          setCustomer(customerData);
        } catch (error) {
          console.error("❌ Fetch failed:", error); // ❌ エラーが発生した場合
        }
      } else {
        console.warn("⚠️ No customer_id found!"); // ⚠️ customer_id がない場合の警告
      }
    };

    fetchAndSetCustomer();
  }, [customer_id]);

  return (
    <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
      <div className="alert alert-success p-4 text-center">
        正常に作成しました
      </div>
      {customer ? <OneCustomerInfoCard {...customer} /> : <div>Loading...</div>}
      <button onClick={() => router.push("/customers")}>
        <div className="btn btn-primary m-4 text-2xl">戻る</div>
      </button>
    </div>
  );
}
