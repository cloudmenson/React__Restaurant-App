import "../../../api/api";
import api from "../../../api/api";

export function fetchWaiters() {
  return api.get("Waiters");
}

export function fetchWaiter(id) {
  return api.get("Waiters?id=" + id);
}

export function apiPostWaiter(name) {
  return api.post("Waiters", {
    name,
  });
}

export function apiUpdateWaiter(id, name) {
  return api.put("waiters/" + id, {
    name,
  });
}

export function apiDelWaiter(id) {
  return api.delete("Waiters/" + id);
}
