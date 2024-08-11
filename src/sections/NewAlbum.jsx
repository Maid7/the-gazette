import {
  Box,
  Divider,
  AbsoluteCenter,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";
// -import components
import MusicPlayer from "../components/MusicPlayer";

export default function NewAlbum() {
  return (
    <Flex
      flexDirection="column"
      p={["5px", "5px", "70px", "80px"]}
      w="100%"
      bg="gray.900"
    >
      <Box position="relative" p="10px">
        <Divider />
        <AbsoluteCenter color="white" bg="gray.900" px="4">
          <Heading
            color="white"
            textTransform="uppercase"
            mt="10px"
            fontStyle="italic"
            fontWeight="3px"
            fontSize={["16px","16px", "25px","30px"]}
          >
            The Gazette
          </Heading>
        </AbsoluteCenter>
      </Box>
      <Flex
        mt="40px"
        color="white"
        mx="auto"
        justify="space-between"
      >
        <Heading fontSize="20px" fontStyle="oblique">
          New Album:
        </Heading>
        <Text ml="6px" fontSize="20px" fontStyle="italic">
          Mass
        </Text>
      </Flex>
      <MusicPlayer />
    </Flex>
  );
}
