import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuPage from "../menu/pages/MenuPage";
import WaiterListPage from "./pages/WaiterListPage";
import WaiterPage from "./pages/WaiterPage";
import AllTablesPage from "../tables/pages/AllTablesPage";
import MyTablesPage from "../tables/pages/MyTablesPage";

export default function WaitersModule() {
  return (
    <Routes>
      <Route path="" element={<WaiterListPage />} />
      <Route path="/waiter/:waiterId" element={<WaiterPage />} />
      <Route path="/waiter/:waiterId/Menu" element={<MenuPage />} />
      <Route path="/waiter/:waiterId/AllTable" element={<AllTablesPage />} />
      <Route path="/waiter/:waiterId/MyTable/1" element={<MyTablesPage />} />
    </Routes>
  );
}
