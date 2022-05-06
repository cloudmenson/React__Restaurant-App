import React from "react";
import { useParams } from "react-router-dom";
import useWaiter from "../../waiters/hooks/useWaiter";
import AllTableMain from "../components/AllTableMain";
import ListOfAllTables from "../components/ListOfAllTables";
import useTable from "../hooks/useTable";

export default function AllTables() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  const {tableList} = useTable()
  return (
    <div>
      <AllTableMain waiter={waiter} />
      <ListOfAllTables tableList={tableList} />
    </div>
  );
}
