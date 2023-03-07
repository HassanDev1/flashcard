import {
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Button,
  Text,
  keyframes,
} from "@chakra-ui/react";
import FrontCard from "../components/FrontCard";
import { useState } from "react";
import BackCard from "../components/BackCard";
import data from "../Quiz/data";
import "./App.css";
const rotate180 = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(180deg);
}
`;
const App = () => {
  const [count, setCount] = useState(0);
  const [quiz, setQuiz] = useState("start");
  const [ans, setAnswer] = useState(data[count].answer);
  const [toggle, setToggle] = useState(true);
  const [img, setImg] = useState("No Image");

  const [isRotated, setIsRotated] = useState(false);

  const handleComponentClick = () => {
    setIsRotated(!isRotated);
  };

  const increment = (count) => {
    setCount((count + 1) % data.length);
    setQuiz(data[count].quiz);
    setAnswer(data[count].answer);
    setImg(data[count].img);
    setToggle(true);
  };
  const decrement = (count) => {
    if (count > 0) {
      setCount(count - 1);
    }
    setQuiz(data[count].quiz);
    setAnswer(data[count].answer);
    setToggle(true);
  };
  const getToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ChakraProvider>
      <Flex
        width='100vw'
        h='100vh'
        direction='column'
        alignItems='center'
        justifyContent='center'
        gap='2'
      >
        <Heading>The Ultimate Parents!</Heading>
        <Text>
          How good of a plant parent are you? Test all of your planty knowledge
          here!
        </Text>
        <Text>Number of cards: {data.length}</Text>

        <div>
          <div onClick={getToggle}>
            {toggle ? (
              <FrontCard
                data={quiz}
                image={img}
                handleComponentClick={handleComponentClick}
              />
            ) : (
              <BackCard
                data={ans}
                handleComponentClick={handleComponentClick}
              />
            )}
          </div>
        </div>
        <HStack>
          <Button onClick={() => decrement(count)}>previous quiz</Button>
          <Button onClick={() => increment(count)}>Next quiz</Button>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
