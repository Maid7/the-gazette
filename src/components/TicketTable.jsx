import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  HStack,
  Text,
} from "@chakra-ui/react";

const TicketTable = () => {
  const [quantities, setQuantities] = useState({
    VIP: 0,
    "Early Bird": 0,
    General: 0,
  });

  const handleQuantityChange = (type, value) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, parseInt(value, 10) || 0),
    }));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
    // Implement checkout logic here
  };

  return (
    <Box padding={4} maxWidth="lg" mx="auto" color="white" textAlign="center">
      <Heading size="lg" mb={4}>
        Purchase Tickets
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Ticket Type</Th>
            <Th>Price</Th>
            <Th isNumeric>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>VIP</Td>
            <Td>$100</Td>
            <Td isNumeric>
              <Input
                type="number"
                value={quantities.VIP}
                onChange={(e) => handleQuantityChange("VIP", e.target.value)}
                min={0}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Early Bird</Td>
            <Td>$60</Td>
            <Td isNumeric>
              <Input
                type="number"
                value={quantities["Early Bird"]}
                onChange={(e) =>
                  handleQuantityChange("Early Bird", e.target.value)
                }
                min={0}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>General</Td>
            <Td>$30</Td>
            <Td isNumeric>
              <Input
                type="number"
                value={quantities.General}
                onChange={(e) =>
                  handleQuantityChange("General", e.target.value)
                }
                min={0}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <HStack spacing={4} mt={4} justify="flex-end">
        <Text fontSize="lg" fontWeight="bold">
          Total: $
          {Object.keys(quantities).reduce((total, type) => {
            const price =
              type === "VIP" ? 100 : type === "Early Bird" ? 60 : 30;
            return total + price * quantities[type];
          }, 0)}
        </Text>
        <Button
          w="300px"
          color="white"
          borderRadius="none"
          bg="transparent"
          border="1px solid white"
          _hover={{
            bg: "white",
            color: "black",
          }}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </HStack>
    </Box>
  );
};

export default TicketTable;
