import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TourDatesTable = () => (
  <Table variant="striped" colorScheme="teal" size={{ base: "sm", md: "md" }}>
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>City</Th>
        <Th>Venue</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>2024-08-15</Td>
        <Td>Tokyo</Td>
        <Td>Tokyo Dome</Td>
      </Tr>
      <Tr color="gray.500">
        <Td>2024-08-20</Td>
        <Td>Osaka</Td>
        <Td>Osaka Castle Hall</Td>
      </Tr>
      <Tr>
        <Td>2024-09-10</Td>
        <Td>New York</Td>
        <Td>Madison Square Garden</Td>
      </Tr>
      {/* Add more tour dates here */}
    </Tbody>
  </Table>
);

const LocalDates = () => (
  <Box>
    <Text color="gray.500" fontSize="lg">
      No local dates
    </Text>
  </Box>
);

const BandTourTabs = () => (
  <Box w={{ base: "100%", md: "80%" }} mx="auto" p={{ base: 2, md: 4 }} mt="2rem" bg="gray.800" borderRadius="md">
    <Heading as="h2" size="xl" textAlign="center" color="white" mb="1rem">
      Tour Dates
    </Heading>
    <Tabs variant="soft-rounded" colorScheme="teal">
      <TabList justifyContent="space-between" flexWrap={{ base: "wrap", md: "nowrap" }}>
        <Flex flex="1" justifyContent={{ base: "center", md: "flex-start" }} mb={{ base: 2, md: 0 }}>
          <Tab color="gray" _selected={{ color: 'white' }}>Tour Dates</Tab>
          <Tab color="gray" _selected={{ color: 'white' }}>Local Dates</Tab>
        </Flex>
        <Flex justifyContent={{ base: "center", md: "flex-end" }}>
          <IconButton
            as="a"
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            color="gray"
            variant="ghost"
            _hover={{ color: 'white' }}
            mx={1}
          />
          <IconButton
            as="a"
            href="https://www.twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            color="gray"
            variant="ghost"
            _hover={{ color: 'white' }}
            mx={1}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            color="gray"
            variant="ghost"
            _hover={{ color: 'white' }}
            mx={1}
          />
        </Flex>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TourDatesTable />
        </TabPanel>
        <TabPanel>
          <LocalDates />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default BandTourTabs;
