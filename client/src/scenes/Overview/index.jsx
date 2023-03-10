import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Header, OverViewChart } from "components";
import React, { useState } from "react";

export const Overview = () => {
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="90vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverViewChart view={view}  />
      </Box>
    </Box>
  );
};
