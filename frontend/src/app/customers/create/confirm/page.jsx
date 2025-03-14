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
  const searchParams = useSearchParams(); // Suspense内で実行
  const customer_id = searchParams.get("customer_id");
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchAndSetCustomer = async () => {
      if (customer_id) {
        const customerData = await fetchCustomer(customer_id);
        setCustomer(customerData);
      }
    };
    fetchAndSetCustomer();
  }, [customer_id]); // customer_idが変更されたときに再実行

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
