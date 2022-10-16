import {
  Flex,
  Button,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProductSimple from "./musiccard";

const Musicbox = () => {
  // create use states for the buttons so that when one is selected it shows a different page
  const [duration, setDuration] = useState("month");
  const Bg = useColorModeValue("white", "#6096FD");
  return (
    <>
      {/* Parent Flex ---------------------- */}
      <Flex w={"100%"} h="100%">
        {/* Button Box Flex ----------------------- */}
        <Flex h={"100%"} w={"20%"} justify={"right"} >
          <VStack spacing={8} w="160px" >
            <Button
              variant={duration === "month" ? "solid" : "ghost"}
              onClick={() => setDuration("month")}
              bg={duration === "month" ? Bg : "none"}
              rounded={0}
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
              size="lg"
              mt={10}
              w="100%"
            >
              Last Month
            </Button>
            <Button
              variant={duration === "sixmonths" ? "solid" : "ghost"}
              onClick={() => setDuration("sixmonths")}
              bg={duration === "sixmonths" ? Bg : "none"}
              rounded={0}
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
              size="lg"
              w="100%"
            >
              Last 6 Months
            </Button>

            <Button
              variant={duration === "alltime" ? "solid" : "ghost"}
              onClick={() => setDuration("alltime")}
              bg={duration === "alltime" ? Bg : "none"}
              rounded={0}
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
              size="lg"
              w="100%"
            >
              All Time
            </Button>
          </VStack>
        </Flex>
        <Flex h="100vh" w={"80%"} bg={Bg} borderRadius="10px">
          <ProductSimple />
        </Flex>
      </Flex>
    </>
  );
};
export default Musicbox;