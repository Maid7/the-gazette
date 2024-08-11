import Slider from 'react-slick';
import { Box, Image, Text, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    src: 'https://www.jame-world.com/media/image/2016-03/6982.jpg',
    alt: 'Image 1',
    text: 'The Gazette Live at The Wiltern',
  },
  {
    src: 'https://i1.wp.com/www.aliwatson.com/wp-content/uploads/2016/08/the-gazette-resize.png?fit=1200%2C800&ssl=1',
    alt: 'Image 2',
    text: 'NYC 06 April 2016',
  },
  {
    src: 'https://i.ytimg.com/vi/AjRoKVxouCE/maxresdefault.jpg',
    alt: 'Image 3',
    text: '"Japan Night" concert in Taipei, Taiwan, 23 May 2015'
  },
  {
    src: 'https://www.jame-world.com/media/image/2007-02/1785.jpg',
    alt: 'Image 4',
    text: 'Kanazawa Bunka Hall',
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    icon={<ChevronLeftIcon />}
    onClick={onClick}
    position="absolute"
    left="10px"
    top="50%"
    transform="translateY(-50%)"
    zIndex="2"
    bg="rgba(0, 0, 0, 0.5)"
    _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
    color="white"
  />
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    icon={<ChevronRightIcon />}
    onClick={onClick}
    position="absolute"
    right="10px"
    top="50%"
    transform="translateY(-50%)"
    zIndex="2"
    bg="rgba(0, 0, 0, 0.5)"
    _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
    color="white"
  />
);


const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

const ImageSlider = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Box w={["330px","330px","600px","750px"]} mx="auto" p={4}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} position="relative" onClick={() => handleImageClick(image)}>
            <Image
              w="100%"
              h="400px"
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              cursor="pointer"
            />
            <Flex
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              justify="center"
              align="center"
              bg="rgba(0, 0, 0, 0.5)"
              opacity="0"
              _hover={{
                opacity: 1,
              }}
              transition="opacity 0.3s"
            >
              <Text color="white" fontSize="xl">
                {image.text}
              </Text>
            </Flex>
          </Box>
        ))}
      </Slider>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalBody p={0}>
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                color="white"
                size="lg"
                variant="ghost"
                m={4}
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
              />
            </Flex>
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                w="100%"
                h="100vh"
                objectFit="contain"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImageSlider;





