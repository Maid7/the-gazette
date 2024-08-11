import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FaGuitar, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Media', path: '/media' },
  { name: 'Tour', path: '/tour' },
  { name: 'Contact', path: '/contact' },
  { name: 'Epk', path: '/epk' },
];

const SocialLinks = [
  { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100044227999715' },
  { icon: FaTwitter, url: 'https://x.com/thegazettestaff?mx=2' },
  { icon: FaInstagram, url: 'https://www.instagram.com/the_gazette_official/' },
  { icon: FaYoutube, url: 'https://www.youtube.com/user/gazetteSMEJ' }
];

const NavLinkComponent = ({ to, children }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      padding: '0.5rem 1rem',
      fontSize: '12px',
      borderRadius: 'md',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: isActive ? 'gray' : 'white',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    })}
  >
    <Box
      _hover={{
        color: 'gray.500',
      }}
      color={({ isActive }) => isActive ? 'gray' : 'inherit'}
      _after={{
        content: '""',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: '100%',
        background: 'gray.500',
        zIndex: -1,
        transition: 'left 0.3s ease',
      }}
      _onHover={{ _after: { left: 0 } }}
    >
      {children}
    </Box>
  </NavLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.900" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <FaGuitar />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color="gray"
            bg="none"
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLinkComponent key={link.name} to={link.path}>
                  {link.name}
                </NavLinkComponent>
              ))}
            </HStack>
          </HStack>
          <HStack spacing={4}>
            {SocialLinks.map((link, index) => (
              <Link key={index} href={link.url} isExternal>
                <link.icon size="20px" color="white" _hover={{ color: 'gray.500' }} />
              </Link>
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} mt={2}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLinkComponent key={link.name} to={link.path}>
                  {link.name}
                </NavLinkComponent>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
