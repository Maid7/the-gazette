import { Box, Heading, Flex, VStack, Text } from "@chakra-ui/react";

// -import components
import AbsoluteCenterTriangle from "../components/AbsoluteCenterTriangle";
import VideoGallery from "../components/VideoGallery";
import ImageSlider from "../components/ImageSlider";
import MusicPlayer from "../components/MusicPlayer";

export default function Media() {
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
        Media
      </Heading>
      <Flex w="100%" flexDirection={["column","column","row","row"]}>
        <VStack flex="2" color="white" pt="5rem">
          <Flex flexDirection="column" gap="10px" w="350px">
            <Text fontWeight="normal">THE NEW ALBUM</Text>
            <Heading fontWeight="normal">MASS</Heading>
            <Text fontSize="12px">
              The Gazette's latest album, Mass, marks a powerful return to their
              distinctive sound while exploring new musical territories. With
              this release, the band continues to captivate fans with their
              signature blend of heavy metal and alternative rock
            </Text>
            <Text fontSize="12px">
              Mass showcases an evolved musical style, blending intricate guitar
              riffs with dynamic drumming and poignant lyrics. Each track is a
              testament to the band's growth, incorporating complex arrangements
              and a deeper emotional range
            </Text>
            <Text fontSize="12px">
              Each track is a testament to the band's growth, incorporating
              complex arrangements and a deeper emotional range. The album opens
              with an explosive track that sets the tone for the rest of the
              record, featuring powerful vocals and energetic instrumentation.
              Throughout Mass, The Gazette delves into themes of struggle,
              introspection, and resilience, reflecting their personal and
              artistic evolution. The band's signature intensity is present, but
              with a new layer of sophistication and maturity.
            </Text>
            <Text fontSize="12px">
              Fans will find familiar elements of their classic sound, but with
              fresh and innovative twists. The production quality of Mass is
              top-notch, enhancing the overall listening experience and
              highlighting the band's technical prowess. Overall, Mass stands as
              a compelling and ambitious album, solidifying The Gazette's place
              in the rock scene while pushing their creative boundaries.
            </Text>
          </Flex>
        </VStack>
        <MusicPlayer />
      </Flex>
      {/* components */}
      <AbsoluteCenterTriangle />
      <VideoGallery />
      <AbsoluteCenterTriangle />
      <Heading as="h5" textAlign="center" mb="5rem" color="white" fontWeight="normal">PHOTOS</Heading>
      <ImageSlider />
    </Flex>
  );
}
