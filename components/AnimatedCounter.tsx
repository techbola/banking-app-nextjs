"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span className="w-full">
      <CountUp end={amount} decimals={2} decimal="." prefix="$" />
    </span>
  );
};

export default AnimatedCounter;
