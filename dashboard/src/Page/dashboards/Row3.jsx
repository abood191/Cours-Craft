import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../Page/piechart/pie";
import React from "react";
import Bar from "../../Page/bar_chart/Bar_chart";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          number of student and teacher
        </Typography>

        <Pie isDashbord={true} />
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: "15px" }}
        ></Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
