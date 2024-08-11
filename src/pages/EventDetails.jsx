import { useParams } from "react-router-dom";
import TicketTable from "../components/TicketTable";
import {
  Box,
  Text,
  Button,
  Flex,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";

const events = [
  {
    id: "1",
    date: "Mon, Nov 12",
    title: "THE VENUE",
    location: "San Francisco",
    fullDate: "Nov 12, 2035, 8:00 PM – 11:00 PM",
    description:
      "The upcoming band tour in San Francisco promises an electrifying performance at the iconic Bill Graham Civic Auditorium. Fans can look forward to an unforgettable night of music, energy, and excitement on November 12, 2025.",
    link: "https://www.wix.com/demone2/rock-music/event-details/the-venue",
  },
  {
    id: "2",
    date: "Wed, Nov 14",
    title: "THE VENUE",
    location: "Chicago",
    fullDate: "Nov 14, 2025, 9:00 PM – Nov 15, 2025, 12:00 AM",
    description:
      "The upcoming band tour in Chicago will take place at the renowned United Center on November 14, 2025. Attendees can expect an exhilarating show filled with dynamic performances and unforgettable music.",
    link: "https://www.wix.com/demone2/rock-music/event-details/the-venue-2",
  },
  {
    id: "3",
    date: "Fri, Nov 20",
    title: "THE VENUE",
    location: "San Francisco",
    fullDate: "Nov 20, 2025, 10:00 PM – Nov 21, 2025, 1:00 AM",
    description:
      "The upcoming band tour in Los Angeles is set for November 20, 2025, at the famous Hollywood Bowl. Fans can anticipate an incredible evening of live music and spectacular performances in this iconic venue.",
    link: "https://www.wix.com/demone2/rock-music/event-details/the-venue-3",
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Text>No event found</Text>;
  }

  return (
    <Box w="100%" bg="gray.900">
      <Box padding={4} maxWidth="md" mx="auto" textAlign="center">
        <VStack spacing={4} align="stretch">
          <Flex w="100%" color="white" align="center" justify="center">
            <Text>{event.date} |</Text>
            <Text ml="5px">{event.location}</Text>
          </Flex>

          <Text fontSize="3xl" fontWeight="semibold" color="white">
            {event.title}
          </Text>

          <Text color="white" fontSize="12px">
            {event.fullDate}
          </Text>
          <Text color="white">{event.description}</Text>
          <HStack spacing={4} mb={4}>
            <Button
              mx="auto"
              as={Link}
              color="white"
              borderRadius="none"
              bg="transparent"
              border="1px solid white"
              href={event.link}
              isExternal
              _hover={{
                bg: "white",
                color: "black",
              }}
            >
              Buy Tickets
            </Button>
          </HStack>
        </VStack>
       
      </Box>
      <TicketTable />
    </Box>
  );
};

export default EventDetail;
