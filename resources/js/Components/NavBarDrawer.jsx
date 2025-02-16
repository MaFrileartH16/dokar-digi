import {
  ActionIcon,
  Button,
  Divider,
  Drawer,
  Group,
  Stack,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconArchive, IconHome2, IconMenu4 } from '@tabler/icons-react';

const NavBarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        size="xs"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        bg="red"
        styles={{
          body: {
            padding: 0,
            height: '100%',
          },
        }}
      >
        <Group gap={0} justify="space-between" p={16}>
          <Group>
            <ActionIcon variant="transparent">
              <IconArchive size={48} />
            </ActionIcon>

            <Title order={3}>Dokar Digi</Title>
          </Group>
        </Group>

        <Divider />

        <Stack spacing={0} flex={1} p={16}>
          <Button
            color="gray"
            leftSection={<IconHome2 />}
            display="flex"
            fullWidth
            variant="subtle"
          >
            Dasbor
          </Button>
        </Stack>
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
