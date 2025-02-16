import { ActionIcon, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu4 } from '@tabler/icons-react';

const NavBarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <ActionIcon
        onClick={open}
        display={{
          base: 'block',
          md: 'none',
        }}
        color="gray"
        variant="subtle"
      >
        <IconMenu4 />
      </ActionIcon>
    </>
  );
};

export default NavBarDrawer;
