import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/eyelogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} width="70px" height="45px"></Image>
        <Text fontSize="3xl">Security System</Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
