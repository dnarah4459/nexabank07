"use client";
import React from "react";
import CountUp from "react-countup";
import DoughnutChart from "./DoughnutChart";


declare interface TotalBalanceBoxProps {
  accounts: Account[]
  totalBanks: number
  totalCurrentBalance: number
}



const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <div>
      <section className="total-balance">
        <div className="total-balance-chart ">
          <DoughnutChart accounts={accounts}/>

        </div>

        <div className="flex flex-col gap-6">
          <h2 className="header-2">Bank Accounts: {totalBanks}</h2>

          <div className="flex flex-col gap-2">
            <p className="total-current-balance">Total Current Balance</p>
            <div className="total-balance-amount flex-center gap-2">
              <CountUp
                end={totalCurrentBalance}
                duration={2.75}
                separator=","
                decimal="."
                decimals={2}
                prefix="$"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalBalanceBox;
