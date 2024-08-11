import {
  Box,
  Grid,
  useBreakpointValue,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
const NewsGrid = () => {
  const columns = useBreakpointValue({ base: 1, md: 2 });

  // get current date
  const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return currentDate.toLocaleDateString("en-US", options);
  };

  const formattedCurrentDate = getFormattedCurrentDate();

  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={4} p={4}>
      <Box
        bgImage={
          "https://64.media.tumblr.com/56c0e3191b60addcbb13c4a2e08c98af/1c5b16d0a337d094-99/s1280x1920/cc604cd6dabea6448aaf7fc1ad12c9a988277dd4.jpg"
        }
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        h="400px"
        w="350px"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          position="absolute"
          bg="rgba(0, 0, 0, 0.7)"
          w="100%"
          h="100%"
          flexDirection="column"
          p="20px"
          justifyContent="space-between"
        >
          <Flex flexDirection="column" align="flex-start">
            <Flex align="center" justify="space-between" w="43px">
              <Text fontSize="10px">Admin</Text>
              <FaCrown size="10px" color="gold" />
            </Flex>
            <Text fontSize="12px">{formattedCurrentDate}</Text>
          </Flex>

          <Box w="80%" h="40px" bg="transparent" borderBottom="2px solid white">
            <Text >New album, "Mass", is out</Text>
          </Box>
        </Flex>
      </Box>
      <Box
        bgImage={
          "https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2018/07/the-GazettE-Live-Tour18-THE-NINTH-PHASE-01-PHENOMENON-.jpg"
        }
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        h="400px"
        w="350px"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          position="absolute"
          bg="rgba(0, 0, 0, 0.7)"
          w="100%"
          h="100%"
          flexDirection="column"
          p="20px"
          justifyContent="space-between"
        >
          <Flex flexDirection="column" align="flex-start">
            <Flex align="center" justify="space-between" w="43px">
              <Text fontSize="10px">Admin</Text>
              <FaCrown size="10px" color="gold" />
            </Flex>
            <Text fontSize="12px">{formattedCurrentDate}</Text>
          </Flex>

          <Box w="90%" h="40px" bg="transparent" borderBottom="2px solid white">
            <Text >2018 Europe Tour dates announced</Text>
          </Box>
        </Flex>
      </Box>
      <Box
        bgImage={
          "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/Music-Festival-Deaths-1-6-1715180209.jpg"
        }
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        h="400px"
        w="350px"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          position="absolute"
          bg="rgba(0, 0, 0, 0.7)"
          w="100%"
          h="100%"
          flexDirection="column"
          p="20px"
          justifyContent="space-between"
        >
          <Flex flexDirection="column" align="flex-start">
            <Flex align="center" justify="space-between" w="43px">
              <Text fontSize="10px">Admin</Text>
              <FaCrown size="10px" color="gold" />
            </Flex>
            <Text fontSize="12px">{formattedCurrentDate}</Text>
          </Flex>

          <Box w="80%" h="60px" bg="transparent" borderBottom="2px solid white">
            <Text fontSize="18px">Win 2 Golden Ring tickets to our next concert</Text>
          </Box>
        </Flex>
      </Box>
      <Box
        bgImage={
          "https://info.shimamura.co.jp/drums/img/uploads/shimastaff03/2023/12/artist-2.jpg"
        }
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        h="400px"
        w="350px"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          position="absolute"
          bg="rgba(0, 0, 0, 0.7)"
          w="100%"
          h="100%"
          flexDirection="column"
          p="20px"
          justifyContent="space-between"
        >
          <Flex flexDirection="column" align="flex-start">
            <Flex align="center" justify="space-between" w="43px">
              <Text fontSize="10px">Admin</Text>
              <FaCrown size="10px" color="gold" />
            </Flex>
            <Text fontSize="12px">{formattedCurrentDate}</Text>
          </Flex>

          <Box w="80%" h="60px" bg="transparent" borderBottom="2px solid white">
            <Text fontSize="18px">A day backstage with The Mighty Kai</Text>
          </Box>
        </Flex>
      </Box>
      
     
      
    </Grid>
  );
};

export default NewsGrid;
