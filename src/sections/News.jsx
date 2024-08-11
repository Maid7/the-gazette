import { Box, Flex, Heading } from "@chakra-ui/react";
// -import NewsGrid component
import NewsGrid from "../components/NewsGrid";

export default function News() {
  return (
    <Flex
      w="100%"
      bg="gray.900"
      align="center"
      justify="center"
      flexDirection="column"
      pt="30px"
    >
      <Box w="100px" h="3px" bg="white"></Box>
      <Heading
        color="white"
        textTransform="uppercase"
        mt="10px"
        fontStyle="italic"
        fontWeight="3px"
      >
        Latest News
      </Heading>
      {/* NewsGrid component */}
      <NewsGrid />
    </Flex>
  );
}
