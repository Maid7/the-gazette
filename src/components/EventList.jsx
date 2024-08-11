import { Flex } from "@chakra-ui/react";
import EventCard from "./EventCard";


const events = [
  {
    id: "1",
    date: "Mon, Nov 12",
    title: "THE VENUE",
    location: "San Francisco",
    fullDate: "Nov 12, 2025, 8:00 PM – 11:00 PM",
    description:
      "The upcoming band tour in San Francisco promises an electrifying performance at the iconic Bill Graham Civic Auditorium. Fans can look forward to an unforgettable night of music, energy, and excitement on November 12, 2025.",
    link: "https://www.wix.com/demone2/rock-music/event-details/the-venue",
  },
  {
    id: "2",
    date: "Wed, Nov 14",
    title: "THE VENUE",
    location: "Chicago",
    fullDate: "Nov 14, 2025, 9:00 PM – Nov 15, 2035, 12:00 AM",
    description:
      "I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event.",
    link: "https://www.wix.com/demone2/rock-music/event-details/the-venue-2",
  },
  {
    id: "3",
    date: "Fri, Nov 16",
    title: "THE VENUE",
    location: "Los Angeles",
    fullDate: "Nov 20, 2025, 10:00 PM – Nov 17, 2035, 1:00 AM",
    description:
      "I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event.",
    link: "https://www.wix.com/demone2/rock-music/event-details/the-venue-3",
  },
];

export default function EventList() {
  return (
    <Flex
      w="100%"
      p={2}
      bg="gray.900"
      align="center"
      spacing={4}
      mt="5rem"
    >
      <Flex w="700px" mx="auto"  flexDirection="column">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Flex>
    </Flex>
  );
}
