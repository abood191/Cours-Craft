/* eslint-disable react/prop-types */
 
 
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, useTheme } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";
import axios from "axios";
let line = await axios.get("http://127.0.0.1:8000/api/admin/getCountAndCategory")
if (line.data.course_data == [] ){
  line.data.course_data = []
}
// {
//     id: "france",
//     color: "hsl(4, 70%, 50%)",
//     data: line.data.course_data
//   },
const data =[
  {
    "id": "japan",
    "color": "hsl(58, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 133
      },
      {
        "x": "helicopter",
        "y": 130
      },
      {
        "x": "boat",
        "y": 177
      },
      {
        "x": "train",
        "y": 193
      },
      {
        "x": "subway",
        "y": 146
      },
      {
        "x": "bus",
        "y": 55
      },
      {
        "x": "car",
        "y": 152
      },
      {
        "x": "moto",
        "y": 254
      },
      {
        "x": "bicycle",
        "y": 140
      },
      {
        "x": "horse",
        "y": 145
      },
      {
        "x": "skateboard",
        "y": 130
      },
      {
        "x": "others",
        "y": 204
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(270, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 32
      },
      {
        "x": "helicopter",
        "y": 50
      },
      {
        "x": "boat",
        "y": 183
      },
      {
        "x": "train",
        "y": 169
      },
      {
        "x": "subway",
        "y": 20
      },
      {
        "x": "bus",
        "y": 115
      },
      {
        "x": "car",
        "y": 291
      },
      {
        "x": "moto",
        "y": 246
      },
      {
        "x": "bicycle",
        "y": 50
      },
      {
        "x": "horse",
        "y": 236
      },
      {
        "x": "skateboard",
        "y": 27
      },
      {
        "x": "others",
        "y": 171
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(253, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 145
      },
      {
        "x": "helicopter",
        "y": 176
      },
      {
        "x": "boat",
        "y": 123
      },
      {
        "x": "train",
        "y": 2
      },
      {
        "x": "subway",
        "y": 10
      },
      {
        "x": "bus",
        "y": 100
      },
      {
        "x": "car",
        "y": 169
      },
      {
        "x": "moto",
        "y": 200
      },
      {
        "x": "bicycle",
        "y": 224
      },
      {
        "x": "horse",
        "y": 55
      },
      {
        "x": "skateboard",
        "y": 199
      },
      {
        "x": "others",
        "y": 270
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(147, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 202
      },
      {
        "x": "helicopter",
        "y": 138
      },
      {
        "x": "boat",
        "y": 35
      },
      {
        "x": "train",
        "y": 299
      },
      {
        "x": "subway",
        "y": 137
      },
      {
        "x": "bus",
        "y": 185
      },
      {
        "x": "car",
        "y": 183
      },
      {
        "x": "moto",
        "y": 178
      },
      {
        "x": "bicycle",
        "y": 65
      },
      {
        "x": "horse",
        "y": 273
      },
      {
        "x": "skateboard",
        "y": 214
      },
      {
        "x": "others",
        "y": 174
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(157, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 248
      },
      {
        "x": "helicopter",
        "y": 294
      },
      {
        "x": "boat",
        "y": 224
      },
      {
        "x": "train",
        "y": 220
      },
      {
        "x": "subway",
        "y": 37
      },
      {
        "x": "bus",
        "y": 155
      },
      {
        "x": "car",
        "y": 271
      },
      {
        "x": "moto",
        "y": 169
      },
      {
        "x": "bicycle",
        "y": 26
      },
      {
        "x": "horse",
        "y": 99
      },
      {
        "x": "skateboard",
        "y": 281
      },
      {
        "x": "others",
        "y": 30
      }
    ]
  }
]

const Line = ({isDahboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard?  "280px"  :  "75vh" }}>
      <ResponsiveLine
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
       
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
