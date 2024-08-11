import { Box, AbsoluteCenter, Divider } from '@chakra-ui/react';

export default function AbsoluteCenterTriangle() {
  return (
    <Box position="relative" padding="10" w="100%">
    <Divider />
    <AbsoluteCenter color="white" bg="gray.900">
      <Box
        width="0"
        height="0"
        borderLeft="30px solid transparent"  
        borderRight="30px solid transparent" 
        borderBottom="50px solid gray"      
        transform="rotate(180deg)"  
        transformOrigin="center"  
      />
    </AbsoluteCenter>
  </Box>
  )
}
