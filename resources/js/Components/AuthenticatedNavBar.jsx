import { router, usePage } from '@inertiajs/react';
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
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

// Ambil user dari Inertia
const AuthenticatedNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { url, props } = usePage();
  const user = props.auth.user; // Ambil user dari props

  // Cek apakah user adalah Admin
  const isAdmin = user?.roles[0] === 'Admin';

  // Daftar menu navigasi
  const navItems = [
    {
      label: 'Dasbor',
      leftSection: (isActive) =>
        isActive ? <IconDashboardFilled /> : <IconDashboard />,
      route: 'dashboard',
      onClick: () => router.get(route('dashboard')),
    },
    ...(isAdmin
      ? [
          {
            label: 'Pengguna',
            leftSection: (isActive) =>
              isActive ? <IconUserFilled /> : <IconUser />,
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
        ]
      : []),
    {
      label: 'Dokumen',
      leftSection: (isActive) => (isActive ? <IconFileFilled /> : <IconFile />),
      route: 'documents',
      onClick: () => router.get(route('documents.index')),
    },
  ];

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Stack
      pos="sticky"
      top={0}
      h="100vh"
      style={{ zIndex: 3 }}
      gap={0}
      w={collapsed ? 80 : 400}
      bg="gray.0"
      display={{ base: 'none', sm: 'flex' }}
    >
      <Flex justify="space-between" p={16}>
        {!collapsed && (
          <Flex align="center">
            <ActionIcon variant="transparent">
              <IconArchive size={32} />
            </ActionIcon>
            <Title order={3} style={{ whiteSpace: 'nowrap' }}>
              Dokar Digi
            </Title>
          </Flex>
        )}

        <ActionIcon onClick={toggleCollapse} variant="subtle" color="gray">
          {collapsed ? <IconChevronRight /> : <IconChevronLeft />}
        </ActionIcon>
      </Flex>

      <Divider />

      <Box flex={1} p={16}>
        {navItems.map(({ label, route, leftSection, ...props }) => {
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
              styles={{
                root: {
                  padding: collapsed ? '0 11px' : '0 16px',
                },
              }}
            >
              {label}
            </Button>
          );
        })}
      </Box>
    </Stack>
  );
};

export default AuthenticatedNavBar;
