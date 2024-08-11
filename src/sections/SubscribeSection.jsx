import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  useToast,
  Heading,
} from "@chakra-ui/react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      toast({
        title: "Subscription Successful!",
        description: "You've been subscribed to our newsletter.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      w="100%"
      h="300px"
      bg="gray.900"
      justify="center"
      align="center"
      flexDirection="column"
    >
      <Box w="100px" h="3px" bg="white"></Box>
      <Heading
        color="white"
        textTransform="uppercase"
        fontStyle="italic"
        fontWeight="3px"
      >
        Subscribe
      </Heading>
      <Box textAlign="center" mt="3rem">
        {!submitted ? (
          <>
            <Box w="300px" mx="auto">
              <Text fontSize="14px" color="white" mb={4}>
                Join our mailing list for the latest news, tour dates & free
                tickets!
              </Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <Input
                  w="400px"
                  h="30px"
                  color="white"
                  borderRadius="none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  _hover={{ border: "2px solid white" }}
                  focusBorderColor="teal.500"
                />
                <Button type="submit" w="100%" borderRadius="none" h="30px">
                  Subscribe Now
                </Button>
              </VStack>
            </form>
          </>
        ) : (
          <Text fontSize="xl" color="white">
            Thank you for subscribing!
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default SubscribeSection;
