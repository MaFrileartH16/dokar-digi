import { UserMenu } from '@/Components/Index.jsx';
import NavBarDrawer from '@/Components/NavBarDrawer.jsx';
import { Box, Divider, Flex } from '@mantine/core';

const AuthenticatedHeader = () => {
  // const user = usePage();

  return (
    <Box
      pos="sticky"
      top={0}
      style={{
        zIndex: 3,
      }}
    >
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

      <Divider />
    </Box>
  );
};

export default AuthenticatedHeader;
