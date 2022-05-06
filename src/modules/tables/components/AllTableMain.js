import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Item from "@mui/material/ListItem";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import ButtonStartPage from "../../common/components/ButtonStartPage";

export default function AllTableMain({ waiter }) {
  const { pathname, state } = useLocation();
  const pathnameWaiter = state;
  return (
    <>
      {waiter.map((item) => {
        return (
          <Box key={item.id}>
            <Item>
              <Item sx={{ pl: 0 }}>
                <p className="App__waiter-name-title">Waiter: {item.name}</p>
              </Item>
              <Item sx={{ display: "grid", justifyContent: "end" }}>
                <ButtonNavBack />
                <ButtonStartPage />
              </Item>
            </Item>
            <nav>
              <Item sx={{ display: "grid" }}>
                <Item sx={{ pl: 0 }}>
                  <NavLink
                    className="App__waiters-menu--active"
                    state={pathnameWaiter}
                    to={`${pathname}`}
                  >
                    All Tables
                  </NavLink>
                </Item>
              </Item>
            </nav>
          </Box>
        );
      })}
    </>
  );
}
