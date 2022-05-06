import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Item from "@mui/material/ListItem";
import ButtonNavBack from "../../../common/components/ButtonNavBack";
import ButtonStartPage from "../../../common/components/ButtonStartPage";

export default function WaiterMain({ waiter }) {
  const { pathname, state } = useLocation();
  const prevPathname = state;

  return (
    <div>
      {/* start */}
      {waiter.map((item) => {
        return (
          <Box key={item.id}>
            <Item>
              <Item>
                <p className="App__waiter-name-title">Waiter: {item.name}</p>
              </Item>
              <Item sx={{ display: "grid", justifyContent: "end" }}>
                <ButtonNavBack />
                <ButtonStartPage />
              </Item>
            </Item>
            <nav>
              <Item sx={{ display: "grid" }}>
                <Item>
                  <NavLink
                    className="App__waiters-menu"
                    state={pathname}
                    to={`${pathname}/myTable/1`}
                  >
                    My table
                  </NavLink>
                </Item>
                <Item>
                  <NavLink
                    className="App__waiters-menu"
                    state={pathname}
                    to={`${pathname}/AllTable`}
                  >
                    All tables
                  </NavLink>
                </Item>
                <Item>
                  <NavLink
                    className="App__waiters-menu"
                    state={pathname}
                    to={`${pathname}/Menu`}
                  >
                    Menu
                  </NavLink>
                </Item>
              </Item>
            </nav>
          </Box>
        );
      })}
    </div>
  );
}
