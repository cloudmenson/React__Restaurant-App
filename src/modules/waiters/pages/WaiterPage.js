import React from "react";
import { useParams } from "react-router-dom";
import WaiterMain from "../components/Waiter/WaiterMain";
import useWaiter from "../hooks/useWaiter";

export default function WaiterPage() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  return (
    <>
      <WaiterMain waiter={waiter} />
    </>
  );
}
