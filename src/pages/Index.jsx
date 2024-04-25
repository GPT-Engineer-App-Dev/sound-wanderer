import { Box, Text, VStack, Heading, Input, Button, Textarea } from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10} p={5}>
      <Heading as="h1" size="2xl" textAlign="center">The Dreamers</Heading>
      <Text fontSize="xl" textAlign="center">
        An indie rock band known for their energetic performances and heartfelt lyrics.
      </Text>
      <Box>
        <Heading as="h2" size="lg" my={4}><FaCalendarAlt /> Tour Dates</Heading>
        <VStack spacing={3}>
          <Text><FaMapMarkerAlt /> New York - June 15th</Text>
          <Text><FaMapMarkerAlt /> Los Angeles - June 20th</Text>
          <Text><FaMapMarkerAlt /> Chicago - June 25th</Text>
        </VStack>
      </Box>
      <Box as="form" w="full" maxW="md">
        <Heading as="h2" size="lg" my={4}><FaEnvelope /> Contact Us</Heading>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue" px={8}>Send</Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;