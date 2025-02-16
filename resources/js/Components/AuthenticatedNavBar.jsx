import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Stack,
  Title,
} from '@mantine/core';
import {
  IconArchive,
  IconChevronLeft,
  IconChevronRight,
  IconHome2,
} from '@tabler/icons-react';
import { useState } from 'react';

const AuthenticatedNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Stack
      gap={0}
      w={collapsed ? 80 : 400}
      bg="gray.0"
      display={{
        base: 'none',
        md: 'flex',
      }}
    >
      <Group gap={0} justify="space-between" p={16}>
        {!collapsed && (
          <Group>
            <ActionIcon variant="transparent">
              <IconArchive size={48} />
            </ActionIcon>

            <Title order={3}>Dokar Digi</Title>
          </Group>
        )}

        <ActionIcon onClick={toggleCollapse} variant="subtle" color="gray">
          {collapsed ? <IconChevronRight /> : <IconChevronLeft />}
        </ActionIcon>
      </Group>

      <Divider />

      <Stack spacing={0} flex={1} p={16}>
        {!collapsed ? (
          <Button
            color="gray"
            leftSection={<IconHome2 />}
            display="flex"
            fullWidth
            variant="subtle"
          >
            Dasbor
          </Button>
        ) : (
          <ActionIcon fullWidth variant="subtle" color="gray">
            <IconHome2 />
          </ActionIcon>
        )}
      </Stack>
    </Stack>
  );
};

export default AuthenticatedNavBar;
