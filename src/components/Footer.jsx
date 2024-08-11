import { Box, Flex, Text, Link, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaSpotify,FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="gray.900" color="white" py={10}>
      <Flex direction="column" align="center" justify="center" textAlign="center">
        <Text fontSize="14px" mb={4} fontWeight="normal"> 
          Follow us on
        </Text>
        <Flex mb={4} gap={4}>
          <Link href="https://www.facebook.com/p/the-GazettE-Official-100044227999715/" isExternal>
            <IconButton
              icon={<FaFacebook />}
              isRound
              size="sm"
              variant="ghost"
              colorScheme="teal"
              aria-label="Facebook"
            />
          </Link>
          <Link href="https://x.com/thegazettestaff" isExternal>
            <IconButton
              icon={<FaTwitter />}
              isRound
              size="sm"
              variant="ghost"
              colorScheme="teal"
              aria-label="Twitter"
            />
          </Link>
          <Link href="https://www.instagram.com/the_gazette_official/" isExternal>
            <IconButton
              icon={<FaInstagram />}
              isRound
              size="sm"
              variant="ghost"
              colorScheme="teal"
              aria-label="Instagram"
            />
          </Link>
      
          <Link href="https://open.spotify.com/artist/4gRFSxjAcJkb54BDjqo7Bc" isExternal>
            <IconButton
              icon={<FaSpotify />}
              isRound
              size="sm"
              variant="ghost"
              colorScheme="teal"
              aria-label="Spotify"
            />
          </Link>
          <Link href="https://www.youtube.com/user/gazetteSMEJ" isExternal>
            <IconButton
              icon={<FaYoutube />}
              isRound
              size="sm"
              variant="ghost"
              colorScheme="teal"
              aria-label="YouTube"
            />
          </Link>
        </Flex>
        <Text fontSize="12px">
          &copy; {currentYear} by Maid. Powered and secured by Maid Sejdinovic
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
