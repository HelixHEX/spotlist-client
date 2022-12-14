import { Button, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { login } from "../utils/auth";
import { ReactComponent as SVG } from "../assets/images/music.svg";
const Login = () => {
  const bg = useColorModeValue("#F2F2F2", "#171923");
  const smalellerBg = useColorModeValue("white", "black");
  const btnBg = useColorModeValue("#f2f2f2", "gray.900");
  return (
    <>
      <ColorModeSwitcher />
      <Flex p={8} pt={12} w="100%" h="100vh" bg={bg}>
        <Flex
          flexDir="column"
          rounded={10}
          boxShadow="lg"
          p={5}
          w="100%"
          h="100%"
          bg={smalellerBg}
        >
          <Heading color="#6096FD">Spotlist.</Heading>
          <Flex flexDir={"column"} alignSelf="center" w="100%" h="100%">
            <Flex alignSelf={"center"} mt={-150} w={{base: 300, md: 400}} h={{base: 300, md: 400}}>
              <SVG />
            </Flex>
            <Button
              mt={{base: 150,md: 50}}
              alignSelf="center"
              bg={btnBg}
              rounded={100}
              width={{base: 300, md: 400}}
              height={[70, 70, 85]}
              onClick={() => login()}
              fontSize={[15, 20, 25]}
              color="#6096FD"
              boxShadow={"2xl"}
            >
              Login with Spotify
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
