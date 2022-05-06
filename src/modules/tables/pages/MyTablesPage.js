import React from "react";
import { useParams } from "react-router-dom";
import useWaiter from "../../waiters/hooks/useWaiter";
import AddItemToTable from "../components/AddItemToTable";
import MyTableMain from "../components/MyTableMain";

export default function MyTables() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  return (
    <div>
      <MyTableMain waiter={waiter} />
      <AddItemToTable />
    </div>
  );
}
