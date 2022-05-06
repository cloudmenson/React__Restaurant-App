import { useEffect, useState } from "react";
import {
  apiDelItemMenu,
  fetchMenu,
  postMenu,
  updateItemMenu,
} from "../services/menuService";

export default function useMenu() {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenu().then(({ data }) => setMenuList(data));
  }, []);

  function addMenu(name, price, description, img) {
    postMenu(name, price, description, img).then(({ data }) => {
      const newMenu = [...menuList, data];
      setMenuList(newMenu);
    });
  }

  console.log(menuList, setMenuList);

  function deleteItemMenu(id) {
    apiDelItemMenu(id).then(({ data }) => {
      const newMenuList = menuList.filter((item) => item.id !== id);
      setMenuList(newMenuList);
    });
  }

  function updateItemMenu(id) {
    updateItemMenu(id).then(({ data }) => {
      console.log(data);
    });
  }

  return {
    menuList,
    addMenu,
    deleteItemMenu,
    updateItemMenu,
  };
}
