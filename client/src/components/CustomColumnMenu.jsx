import { Box } from "@mui/material";
import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem } from "@mui/x-data-grid";
import React from "react";

export const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn="currentColumn"
      open={open}
    >
        <GridFilterMenuItem  onClick={hideMenu} column={currentColumn} />
        <HideGridColMenuItem  onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};
