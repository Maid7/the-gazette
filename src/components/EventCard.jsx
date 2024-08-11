import { Flex, VStack, Button, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function EventCard({ event }) {
  return (
    <Flex
      w="100%"
      h="100px"
      borderTop="1px solid white"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack as="flex" align="flex-start">
        <Text color="white" fontWeight="normal" fontSize="13px">
          {event.date}
        </Text>
        <Heading mt="-10px" color="white" fontWeight="normal" fontSize="14px">
          {event.title}/{event.location}
        </Heading>
      </VStack>
      <Link to={`/${event.id}`}>
      <Button
        bg="transparent"
        borderRadius="0"
        border="1px solid white"
        color="white"
        _hover={{
            bg: "transparent",
            color: "gray.500",
          }}
          fontSize="12px"
        >
      
        Buy Tickets
      </Button>
      </Link>
     
    </Flex>
  );
}
