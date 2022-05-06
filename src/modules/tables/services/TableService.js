import "../../../api/api";
import api from "../../../api/api";

export function fetchAllTables() {
  return api.get("Tables");
}