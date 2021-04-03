import React from 'react';
import { Box, Text, Button } from '@blockstack/ui';
import { authenticate } from '../utils/auth';

export const Signin = () => {
  return (
    <Box width="100%" textAlign="center">
      <Box maxWidth="800px" mx="auto" mt={[1, '10px']}>
        <Text fontWeight="700" fontSize={['18px', '26px']} lineHeight={1} display="block">
          Connect Freehold to Stacks
        </Text>
        <Box mt={[1, '10px']}>
          <Button onClick={() => authenticate()}>Get Started</Button>
        </Box>
      </Box>
    </Box>
  );
};