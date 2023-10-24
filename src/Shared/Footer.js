import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const socials = [
  {
    icon: BiLogoFacebook,
    link: "https://www.facebook.com/",
  },
  {
    icon: BiLogoTwitter,
    link: "https://twitter.com/home",
  },
  {
    icon: BiLogoInstagram,
    link: "https://www.facebook.com/",
  },
];

function Footer() {
  return (
    <Box bgColor='#403F3F' mt='80px' pb='40px' pt='160px' px='40px'>
      <HStack justifyContent='space-between'>
        <HStack gap='16px' color='#FFDC83'>
          <Text fontWeight='bold'>
            <Icon as={FaLocationDot} /> Philippines
          </Text>
          <Text opacity={0.6}>&copy; 2023 Calcium & Joyjoy</Text>
        </HStack>
        <HStack fontSize='32px' gap='16px'>
          {socials.map((item) => (
            <Icon
              cursor='pointer'
              bgColor='#FFDC83'
              key={item.link}
              as={item.icon}
              borderRadius='full'
              p='6px'
            />
          ))}
        </HStack>
      </HStack>
    </Box>
  );
}

export default Footer;
