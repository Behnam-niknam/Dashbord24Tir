// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React  from "react";
import {useState} from "react";
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart } from 'victory';
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

import Dropdown from 'react-bootstrap/Dropdown';

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  const Dataday=[
    {quarte:1 , earnings:1300},
    {quarte:2 , earnings:1400},
    {quarte:3 , earnings:1300},
    {quarte:4 , earnings:1500},
    {quarte:5 , earnings:1300},

  ];
  const Dataweek=[
    {quarte:1 , earnings:1300},
    {quarte:2 , earnings:1400},
    {quarte:3 , earnings:1300},
    {quarte:4 , earnings:1500},
    {quarte:5 , earnings:1300},
    {quarte:6 , earnings:1600},
    {quarte:7 , earnings:1300},
    {quarte:8 , earnings:1700},
    {quarte:9 , earnings:1300},
    {quarte:10 , earnings:1800},
    {quarte:11 , earnings:100},
    {quarte:12  , earnings:1300},
  ];
  const Datamound=[
    {quarte:1 , earnings:1300},
    {quarte:2 , earnings:1400},
    {quarte:3 , earnings:1300},
    {quarte:4 , earnings:1500},
    {quarte:5 , earnings:1300},
    {quarte:6 , earnings:1600},
    {quarte:7 , earnings:1300},
    {quarte:8 , earnings:1700},
    {quarte:9 , earnings:1300},
    {quarte:10 , earnings:1800},
    {quarte:11 , earnings:100},
    {quarte:12  , earnings:1300},
    {quarte:13  , earnings:1900},
    {quarte:14  , earnings:1000},
    {quarte:15  , earnings:1300},
    {quarte:16  , earnings:1100},
    {quarte:17  , earnings:1300},
  ];
  const Datayear=[
    {quarte:1 , earnings:1300},
    {quarte:2 , earnings:1400},
    {quarte:3 , earnings:1300},
    {quarte:4 , earnings:1500},
    {quarte:5 , earnings:1300},
    {quarte:6 , earnings:1600},
    {quarte:7 , earnings:1300},
    {quarte:8 , earnings:1700},
    {quarte:9 , earnings:1300},
    {quarte:10 , earnings:1800},
    {quarte:11 , earnings:100},
    {quarte:12  , earnings:1300},
    {quarte:13  , earnings:1900},
    {quarte:14  , earnings:1000},
    {quarte:15  , earnings:1300},
    {quarte:16  , earnings:1100},
    {quarte:17  , earnings:1300},
    {quarte:18  , earnings:1500},
    {quarte:19  , earnings:1300},
    {quarte:20  , earnings:1600},
    {quarte:21  , earnings:1300},
    {quarte:22  , earnings:800},
  ];
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
 
const [selectedData , setselectedData]=useState(Datamound)
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Choose a time frame
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{setselectedData(Dataday)}}>Day</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setselectedData(Dataweek)}}>Week</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setselectedData(Datamound)}}>Mound</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setselectedData(Datayear)}}>Year</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    <VictoryChart>
        <VictoryBar
          data={selectedData}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    </Card>
  );
}
