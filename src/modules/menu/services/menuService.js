import "../../../api/api";
import api from "../../../api/api";

export function fetchMenu() {
  return api.get("menu");
}

export function fetchMenuItem(id) {
  return api.get("menu?id=" + id);
}

export function postMenu(name, price, description, img) {
  return api.post("menu", {
    name,
    price,
    description,
    img,
  });
}

export function apiDelItemMenu(id) {
  return api.delete("menu/" + id);
}

export function apiUpdateItemMenu(id) {
  return api.put("menu/" + id);
}
