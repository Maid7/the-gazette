import { Flex, Heading, Box,Text } from "@chakra-ui/react";
// -import Contact form component
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Flex
      pt="60px"
      w="100%"
      bg="gray.900"
      flexDirection="column"
      align="center"
    >
      <Box w="100px" h="2px" bg="white"></Box>
      <Heading
        color="white"
        textTransform="uppercase"
        mt="20px"
        fontStyle="italic"
        fontWeight="normal"
      >
        Contact
      </Heading>
      <Text fontSize="14px" color="white" fontWeight="normal" mt="40px">DROP US A LINE:</Text>
      <ContactForm />
    </Flex>
  );
}
