"use client"; // クライアントコンポーネントとして実行

import { useEffect, useState } from "react";
import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";
import { useSearchParams } from "next/navigation";

async function fetchCustomer(id) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + `/customers?customer_id=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch customer");
  }
  return res.json();
}

export default function ReadPage() {
  const searchParams = useSearchParams();
  const customer_id = searchParams.get("customer_id"); // クエリパラメータを取得
  const [customerInfo, setCustomerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!customer_id) return;

    const fetchData = async () => {
      try {
        const data = await fetchCustomer(customer_id);
        setCustomerInfo(data[0]); // 配列の最初の要素をセット
      } catch (err) {
        console.error("Error fetching customer:", err);
        setError("顧客情報を取得できませんでした");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [customer_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-error">{error}</div>;

  return (
    <>
      <div className="alert alert-success">更新しました</div>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        <OneCustomerInfoCard {...customerInfo} />
      </div>
      <button className="btn btn-outline btn-accent">
        <a href="/customers">一覧に戻る</a>
      </button>
    </>
  );
}
