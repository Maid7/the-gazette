import React, { useRef, useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Box, Flex, Heading } from "@chakra-ui/react";

const VideoPlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleReady = (event) => {
    setPlayer(event.target);
  };

  const handleDurationChange = () => {
    if (player) {
      console.log('Video duration:', player.getDuration());
    }
  };

  const handleTimeUpdate = () => {
    if (player) {
      console.log('Current time:', player.getCurrentTime());
    }
  };

  const clearExistingInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      clearExistingInterval();
      const id = setInterval(handleTimeUpdate, 1000);
      setIntervalId(id);
    } else {
      clearExistingInterval();
    }
  };

  useEffect(() => {
    return () => clearExistingInterval(); // Cleanup interval on unmount
  }, []);

  return (
    <Box w="100%" position="relative" mb={4}>
      <YouTube
        videoId={videoId}
        opts={{
          height: "360",
          width: "100%",
          playerVars: { autoplay: 0 },
        }}
        onReady={handleReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onStateChange={handleStateChange}
        onEnd={() => setIsPlaying(false)}
        onPlaybackRateChange={handleDurationChange}
      />
    </Box>
  );
};

const VideoGallery = () => {
  return (
    <Box>
      <Heading
        as="h5"
        textAlign="center"
        mb="5rem"
        color="white"
        fontWeight="normal"
      >
        LATEST VIDEOS
      </Heading>
      <Flex w={["330px","330px","600px", "800px"]} direction={{ base: "column", md: "row" }} gap={4} p={4}>
        <Box flex="1">
          <VideoPlayer videoId="DOLqvOkmQy0" />
        </Box>
        <Box flex="1">
          <VideoPlayer videoId="2HkNboQyKVM" />
        </Box>
      </Flex>
    </Box>
  );
};

export default VideoGallery;
