import * as React from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";

export default function Demo3() {
  const [age, setAge] = React.useState("");

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          displayEmpty
          MenuProps={{
            disablePortal: true,
            PaperProps: {
              sx: { zIndex: 9999 },
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
