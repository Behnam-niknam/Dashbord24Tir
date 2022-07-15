// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import React from "react";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";


export default function WeeklyRevenue(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
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
  const tabalData=[
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},
    {username:"09123265454" , price:"169000" ,package:"6ماهه" , createTime:"26.2.1400  22:10:23", membershipTime:"26.2.1400  22:15:23", situation:"موفق"},

  ];
  const column=Object.keys(tabalData[0]);
  const ThData =()=>{
    
    return column.map((data)=>{
        return <th key={data}>{data}</th>
    })
}
const tdData =() =>{
   
  return tabalData.map((data)=>{
    return(
        <tr>
             {
                column.map((v)=>{
                    return <td>{data[v]}</td>
                })
             }
        </tr>
    )
  })
}
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
          <table className="table" >
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>

     </Card>
  );
}
