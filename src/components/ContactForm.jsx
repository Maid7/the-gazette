import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  useBreakpointValue,
  background,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box p={5} w={["350px","350px","430px","460px"]} mx="auto">
      <Stack spacing={1} as="form" onSubmit={handleSubmit}>
        <FormControl id="firstName" isRequired>
          <FormLabel color="white" fontSize="12px" fontWeight="normal">
            First Name
          </FormLabel>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            borderRadius="none"
            color="white"
            h="30px"
            _hover={{ border: "2px solid white" }}
          />
        </FormControl>

        <FormControl id="lastName" isRequired>
          <FormLabel color="white" fontSize="12px" fontWeight="normal">
            Last Name
          </FormLabel>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            borderRadius="none"
            color="white"
            h="30px"
            _hover={{ border: "2px solid white" }}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel color="white" fontSize="12px" fontWeight="normal">
            Email
          </FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            borderRadius="none"
            color="white"
            h="30px"
            _hover={{ border: "2px solid white" }}
          />
        </FormControl>

        <FormControl id="phone">
          <FormLabel color="white" fontSize="12px" fontWeight="normal">
            Phone
          </FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            borderRadius="none"
            color="white"
            h="30px"
            _hover={{ border: "2px solid white" }}
          />
        </FormControl>

        <FormControl id="message" isRequired>
          <FormLabel color="white" fontSize="12px" fontWeight="normal">
            Leave your message...
          </FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            borderRadius="none"
            color="white"
            rows={4}
            _hover={{ border: "2px solid white" }}
          />
        </FormControl>

        <Flex justifyContent="flex-end">
          <Button
            type="submit"
            borderRadius="none"
            bg="white"
            color="black"
            mt={4}
            w="120px"
            h="30px"
            _hover={{ bg: "gray.700", color: "white" }}
          >
            Submit
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ContactForm;
