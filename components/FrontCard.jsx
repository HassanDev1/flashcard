import {
  Text,
  Card,
  CardBody,
  VStack,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import "../src/App.css";
//

const FrontCard = ({ data, handleComponentClick, image }) => {
  return (
    <VStack onClick={handleComponentClick} className='rotating-component'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={image} alt='' borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Text align={"center"}>{data}</Text>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default FrontCard;
