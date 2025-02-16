import { Avatar, Flex } from '@mantine/core';

const AuthenticatedHeader = () => {
  return (
    <Flex w="100%" p={16} justify="end" bg="gray.0">
      <Avatar />
    </Flex>
  );
};

export default AuthenticatedHeader;
