import { useEffect, useState } from "react";
import { fetchWaiter } from "../services/waitersService";

export default function useWaiter(id) {
  const [waiter, setWaiter] = useState([]);
  useEffect(() => {
    fetchWaiter(id).then(({ data }) => setWaiter(data));
  }, []);
  return waiter;
}
