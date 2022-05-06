import { useEffect } from "react";
import { useState } from "react";
import {
  fetchWaiters,
  apiPostWaiter,
  apiUpdateWaiter,
  apiDelWaiter,
} from "../services/waitersService";

export default function useWaiterList() {
  const [waiterList, setWaiterList] = useState([]);

  useEffect(() => {
    fetchWaiters().then(({ data }) => setWaiterList(data));
  }, []);

  function addWaiter(name) {
    apiPostWaiter(name).then(({ data }) => {
      const newWaiters = [...waiterList, data];
      setWaiterList(newWaiters);
    });
  }

  function updateWaiter(id, name) {
    apiUpdateWaiter(id, name).then(({ data }) => {
      const deletedWaiter = waiterList.filter((item) => item.id !== id);
      const newWaiters = [...deletedWaiter, data];
      console.log(newWaiters);
      setWaiterList(newWaiters);
    });
  }

  function deleteWaiter(id) {
    apiDelWaiter(id).then(({ data }) => {
      const newWaiters = waiterList.filter((item) => item.id !== id);
      setWaiterList(newWaiters);
    });
  }

  return {
    waiterList,
    addWaiter,
    updateWaiter,
    deleteWaiter,
  };
}
