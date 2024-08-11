import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import blindingHope from "../music/blindingHope.mp3";
import nox from "../music/nox.mp3";
import rollin from "../music/rollin.mp3";
import thePale from "../music/thePale.mp3";

const songs = [
  {
    title: "Blinding Hope",
    src: blindingHope,
    time: "6:17"
  },
  {
    title: "Nox",
    src: nox,
     time: "3:33"
  },
  {
    title: "Rollin",
    src: rollin,
     time: "3:29"
  },
  {
    title: "The Pale",
    src: thePale,
     time: "5:00"
  },
];

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 0);
  };

  const handlePrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 0);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const playSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 0);
  };

  return (
    <Flex
      p="20px"
      w="100%"
      mx="auto"
      mt="2rem"
      flexDirection="column"
      flex="1.5"
    >
      <Flex width="100%" color="gray.500" align="center" justify="space-between">
        <Text fontSize="12px">Buy Album $9.99</Text>
        <Text fontSize="12px">Share Album</Text>
      </Flex>
      <Box
        mt="5px"
        w="100%"
        h="400px"
        bgImage={
          "https://cms.kerrang.com/images/2021/05/GAZETTE-WEB-SLEEVE.jpg"
        }
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
      <Box w="100%" mx="auto" mt="20px">
        <VStack spacing={4}>
          <Text fontSize="14px" fontStyle="italic" color="white">
            {songs[currentSongIndex].title}
          </Text>
          <Flex gap="10px" w="100%" alignItems="center" justifyContent="space-between">
            <Text color="white" fontSize="10px">{formatTime(currentTime)}</Text>
            <Slider
              aria-label="progress-bar"
              value={currentTime}
              max={duration}
              onChange={(val) => (audioRef.current.currentTime = val)}
              colorScheme="whiteAlpha"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text color="white" fontSize="10px">{formatTime(duration)}</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center" gap="10px" w="100%">
            <Flex
              align="center"
              justify="center"
              as="button"
              onClick={handlePrevious}
              aria-label="Previous"
              border="1px solid white"
              borderRadius="50%"
              h="20px"
              w="20px"
            >
              <FaStepBackward color="white" size="12px" />
            </Flex>
            <Flex
              align="center"
              justify="center"
              as="button"
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
              border="1px solid white"
              borderRadius="50%"
              h="35px"
              w="35px"
            >
              {isPlaying ? <FaPause color="white" /> : <FaPlay color="white" />}
            </Flex>
            <Flex
              align="center"
              justify="center"
              as="button"
              onClick={handleNext}
              aria-label="Next"
              border="1px solid white"
              borderRadius="50%"
              h="20px"
              w="20px"
            >
              <FaStepForward color="white" size="12px" />
            </Flex>
          </Flex>
        </VStack>
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleNext}
        />
        <VStack spacing={2} mt={4}>
          {songs.map((song, index) => (
            <Flex
              key={index}
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              onClick={() => playSong(index)}
              cursor="pointer"
              p={2}
              _hover={{ bg: "gray.700" }}
              borderRadius="md"
              bg={currentSongIndex === index ? "gray.600" : "transparent"}
            >
              <Text color="white" fontSize="14px">
                {song.title}
              </Text>
              <Text color="white" fontSize="12px">
                {song.time}
              </Text>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default MusicPlayer;
