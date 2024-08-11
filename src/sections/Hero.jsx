import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <Box
      w="100%"
      h="100vh"
      backgroundImage={
        "https://cms.kerrang.com/images/2021/05/GAZETTE-WEB-SLEEVE.jpg"
      }
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
    >
      <Link to="tour">
      <Button
        w="170px"
        h="40px"
        borderRadius="none"
        bg="transparent"
        color="white"
        fontSize="14px"
        border="2px solid white"
        position="absolute"
        top="60%"
        left={["30%","30%","40%","40%"]}
        _hover={{
          bg: "white",
          color: "black",
        }}
      >
        Tour Tickets
      </Button>
      </Link>
     
    </Box>
  );
}
