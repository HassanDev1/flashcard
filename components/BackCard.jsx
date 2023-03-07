import { Text, Card, CardBody, VStack } from "@chakra-ui/react";
import data from "../Quiz/data";
import { useState } from "react";
const BackCard = ({ data, handleComponentClick }) => {
  return (
    <VStack onClick={handleComponentClick} className='rotating-component'>
      <Card w={"37.5em"} h={"12.5em"} cursor={"pointer"}>
        <CardBody>
          <Text align={"center"} p={"10%"} fontSize={"1em"} flexWrap={"wrap"}>
            {data}
          </Text>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default BackCard;
