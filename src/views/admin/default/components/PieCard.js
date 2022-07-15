// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue, background } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import {VictoryPie , VictoryLabel } from "victory"
import axios from "axios";

import React, { useEffect } from "react";
import { useState } from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const [selctedData , setselctedData]=useState([
    {x:"males" , y:90},
    {x:"famales" , y:5},
    {x:"unknow" , y:15},

  ]);
 const getDatafromserver=()=>{
  axios.get("https://user.o2fitt.com/api/v1/UserProfiles/GetUsersGenderCount").then((re)=>{
    setselctedData([
      {x:"males" , y:re.data.data.meles},
      {x:"females" , y:re.data.data.females},
      {x:"unknow" , y:100},

    ])
  })
 };
 useEffect(()=>{
  getDatafromserver()
 },[]);
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
  <svg viewBox="0 0 400 400" >
  <VictoryPie
    standalone={false}
    width={400} height={400}
    data={[
      {x: "males", y: 33},
      {x: "females", y: 33},
      {x: "unknow", y: 33}
    ]} 
    colorScale={["blue", "red", "gray"]} 
     labelRadius={100}
    style={{ labels: { fontSize: 20, fill: "white"}}}

  />

  <VictoryLabel

  />
</svg>

{/*       <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Your Pie Chart
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select>
      </Flex>

      <PieChart
        h='100%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Your files
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            63%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              System
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            25%
          </Text>
        </Flex>
      </Card>
 */}    </Card>
  );
}
