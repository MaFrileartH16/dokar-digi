import { UserMenu } from '@/Components/Index.jsx';
import NavBarDrawer from '@/Components/NavBarDrawer.jsx';
import { usePage } from '@inertiajs/react';
import { Flex } from '@mantine/core';

const AuthenticatedHeader = () => {
  const user = usePage();

  return (
    <Flex
      w="100%"
      p={16}
      justify={{
        base: 'space-between',
        sm: 'end',
      }}
      bg="gray.0"
    >
      <NavBarDrawer />

      <UserMenu />
    </Flex>
  );
};

export default AuthenticatedHeader;
