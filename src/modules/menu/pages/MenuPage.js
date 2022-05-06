import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { useParams } from "react-router-dom";
import useWaiter from "../../waiters/hooks/useWaiter";
import AddToMenuForm from "../components/AddToMenuForm/AddToMenuForm";
import MainMenu from "../components/MainMenu";
import MenuList from "../components/MenuList";
import useMenu from "../hooks/useMenu";

export default function MenuPage() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  const [open, setOpen] = useState(false);

  const { menuList, addMenu, deleteItemMenu, updateItemMenu } = useMenu();
  return (
    <div>
      <MainMenu waiter={waiter} open={open} setOpen={setOpen} />
      <Collapse in={open}>
        <div id="formMenu">
          <AddToMenuForm addMenu={addMenu} open={open} setOpen={setOpen} />
        </div>
      </Collapse>
      <MenuList
        menuList={menuList}
        deleteItemMenu={deleteItemMenu}
        updateItemMenu={updateItemMenu}
      />
    </div>
  );
}
