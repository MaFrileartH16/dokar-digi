import { router, usePage } from '@inertiajs/react';
import {
  ActionIcon,
  Box,
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
  IconDashboard,
  IconDashboardFilled,
  IconFile,
  IconFileFilled,
  IconShieldLock,
  IconShieldLockFilled,
  IconUser,
  IconUserFilled,
} from '@tabler/icons-react';
import { useState } from 'react';

const navItems = [
  {
    label: 'Dasbor',
    leftSection: (isActive) =>
      isActive ? <IconDashboardFilled /> : <IconDashboard />,
    route: 'dashboard',
    onClick: () => router.get(route('dashboard')),
  },
  {
    label: 'Pengguna',
    leftSection: (isActive) => (isActive ? <IconUserFilled /> : <IconUser />),
    route: 'users',
    onClick: () => router.get(route('users.index')),
  },
  {
    label: 'Peran',
    leftSection: (isActive) =>
      isActive ? <IconShieldLockFilled /> : <IconShieldLock />,
    route: 'roles',
    onClick: () => router.get(route('roles.index')),
  },
  {
    label: 'Dokumen',
    leftSection: (isActive) => (isActive ? <IconFileFilled /> : <IconFile />),
    route: 'documents',
    onClick: () => router.get(route('documents.index')),
  },
];

const AuthenticatedNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { url } = usePage();

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Stack
      pos="sticky"
      top={0}
      h="100vh"
      style={{
        zIndex: 3,
      }}
      gap={0}
      w={collapsed ? 80 : 400}
      bg="gray.0"
      display={{
        base: 'none',
        sm: 'flex',
      }}
    >
      <Group gap={0} justify="space-between" p={16}>
        {!collapsed && (
          <Group gap={0}>
            <ActionIcon variant="transparent">
              <IconArchive size={32} />
            </ActionIcon>
            <Title order={3}>Dokar Digi</Title>
          </Group>
        )}

        <ActionIcon onClick={toggleCollapse} variant="subtle" color="gray">
          {collapsed ? <IconChevronRight /> : <IconChevronLeft />}
        </ActionIcon>
      </Group>

      <Divider />

      <Box flex={1} p={16}>
        {!collapsed ? (
          navItems.map(({ label, route, leftSection, ...props }) => {
            const isActive = url.includes(route);

            return (
              <Button
                key={label}
                color={isActive ? 'blue' : 'gray'}
                display="flex"
                fullWidth
                variant="subtle"
                leftSection={leftSection(isActive)}
                {...props}
              >
                {label}
              </Button>
            );
          })
        ) : (
          <Box>
            {navItems.map(({ leftSection, label, route, ...props }) => {
              const isActive = url.includes(route);

              return (
                <ActionIcon
                  key={label}
                  fullWidth
                  variant="subtle"
                  color={isActive ? 'blue' : 'gray'}
                  {...props}
                >
                  {leftSection(isActive)}
                </ActionIcon>
              );
            })}
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default AuthenticatedNavBar;
