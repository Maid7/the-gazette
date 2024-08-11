import { Box,Heading ,Flex} from '@chakra-ui/react'
import EventList from '../components/EventList'

export default function Tour() {
  return (
    <Flex alignItems="center" flexDirection="column" w="100%" bg="gray.900">
     <Box w="100px" h="2px" bg="white" mt="5rem"></Box>
      <Heading
        color="white"
        textTransform="uppercase"
        mt="20px"
        fontStyle="italic"
        fontWeight="normal"
      >
        Tour Dates
      </Heading>
     <EventList/> 
    </Flex>
  )
}
