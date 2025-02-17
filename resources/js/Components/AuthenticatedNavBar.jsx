import { Button } from '@/Components/Index.jsx';
import { router, usePage } from '@inertiajs/react';
import { ActionIcon, Box, Divider, Flex, Stack, Title } from '@mantine/core';
import {
  IconArchive,
  IconChevronLeft,
  IconChevronRight,
  IconDashboard,
  IconFile,
  IconShieldLock,
  IconUser,
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
      leftSection: <IconDashboard />,
      route: 'dashboard',
      onClick: () => router.get(route('dashboard')),
    },
    ...(isAdmin
      ? [
          {
            label: 'Pengguna',
            leftSection: <IconUser />,
            route: 'users',
            onClick: () => router.get(route('users.index')),
          },
          {
            label: 'Peran',
            leftSection: <IconShieldLock />,
            route: 'roles',
            onClick: () => router.get(route('roles.index')),
          },
        ]
      : []),
    {
      label: 'Dokumen',
      leftSection: <IconFile />,
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
        {navItems.map(({ label, route, onClick, ...props }) => {
          const isActive = url.includes(route);

          return (
            <div key={label}>
              {collapsed ? (
                <ActionIcon
                  variant="subtle"
                  color={isActive ? 'blue' : 'gray'}
                  onClick={onClick}
                >
                  {props.leftSection}
                </ActionIcon>
              ) : (
                <Button
                  key={label}
                  color={isActive ? 'blue' : 'gray'}
                  display="flex"
                  fullWidth
                  variant="subtle"
                  onClick={onClick}
                  {...props}
                >
                  {label}
                </Button>
              )}
            </div>
          );
        })}
      </Box>
    </Stack>
  );
};

export default AuthenticatedNavBar;
