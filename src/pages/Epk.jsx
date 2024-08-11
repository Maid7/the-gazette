import { Flex, Box, Heading, VStack, Text } from "@chakra-ui/react";
// import components
import ImageSlider from "../components/ImageSlider";
import MusicPlayer from "../components/MusicPlayer";
import BandTourTabs from "../components/BandTourDates";

export default function Epk() {
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
        Epk
      </Heading>
      {/* Image Slider Component */}
      <ImageSlider />
      <Flex
        w="770px"
        mx="auto"
        p={4}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex align="flex-start" flexDirection="column" flex="1">
          <Heading
            color="white"
            textTransform="uppercase"
            mt="20px"
            fontStyle="italic"
            fontWeight="normal"
          >
            Bio
          </Heading>
          <Box w="70px" h="3px" bg="white" />
          <VStack align="flex-start" mt="1rem">
            <Text color="white" fontSize="12px">
              Origin: Kanagawa, Japan
            </Text>
            <Text color="white" fontSize="12px">
              Genres: Visual Kei, Rock, Metal
            </Text>
            <Text color="white" fontSize="12px">
              Years Active: 2001- Present
            </Text>
            <Text color="white" fontSize="12px">
              Label: Sony Music Records
            </Text>
            <Text color="white" fontSize="12px">
              Website: the-gazette.com
            </Text>
          </VStack>
          <VStack align="flex-start" mt="3rem" w="300px" >
            <Heading fontSize="lg" color="white">
              Short Bio
            </Heading>
            <Text color="white" fontSize="12px">
              The Gazette, formed in 2002, is a prominent Japanese visual kei
              rock band. Initially consisting of five members, the band has
              maintained its original lineup throughout its career: Ruki
              (vocals), Uruha (lead guitar), Aoi (rhythm guitar), Reita (bass),
              and Kai (drums). They are known for their dynamic music style,
              blending heavy metal, alternative rock, and elements of electronic
              music. The band gained rapid popularity with their debut single,
              "Wakaremichi," showcasing their unique visual aesthetics and
              powerful performances. Over the years, The Gazette has released
              numerous successful albums, including "NIL," "DIM," and "DOGMA,"
              which have charted prominently in Japan. They are also known for
              their visually stunning and emotionally intense live shows, which
              have garnered a dedicated global fanbase. The Gazette's music
              often explores dark and complex themes, resonating deeply with
              their audience. Their versatility is evident as they seamlessly
              transition from aggressive tracks to melodic ballads. The band has
              played a significant role in bringing the visual kei genre to
              international audiences, performing in various countries
              worldwide. Despite the evolving music industry, The Gazette
              continues to innovate and influence, remaining one of Japan's most
              influential rock bands.
            </Text>
          </VStack>
        </Flex>
        <Flex
          w="330px"
          flexDirection="column"
          maxW={{ base: "100%", md: "50%" }}
        >
          <Heading
            color="white"
            textTransform="uppercase"
            mt="20px"
            fontStyle="italic"
            fontWeight="normal"
            ml="10px"
          >
            Music
          </Heading>
          <Box  ml="10px" w="110px" h="3px" bg="white" mb="1rem" />
          {/* Music Player Component */}
          <MusicPlayer />
        </Flex>
      </Flex>
      {/* Band Tour Dates component */}
      <BandTourTabs/>
    </Flex>
  );
}
