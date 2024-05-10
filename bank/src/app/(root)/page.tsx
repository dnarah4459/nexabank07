import Image from "next/image";
import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { accountsDummyData } from "./dummyData";

export default function Home() {
  const loggedIn = { firstName: "Priya" };

  const totalCurrentBalance = accountsDummyData.reduce((sum, account) => sum + account.currentBalance, 0);

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={accountsDummyData}
            totalBanks={4}
            totalCurrentBalance={totalCurrentBalance}
          />



          
        </header>
      </div>
    </section>
  );
}
