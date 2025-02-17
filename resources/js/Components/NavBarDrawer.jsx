import { Button } from '@/Components/Index.jsx';
import { router, usePage } from '@inertiajs/react'; // Gunakan usePage untuk mendapatkan data user
import { ActionIcon, Box, Divider, Drawer, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconArchive,
  IconDashboard,
  IconFile,
  IconMenu4,
  IconShieldLock,
  IconUser,
  IconX,
} from '@tabler/icons-react';

const NavBarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { auth } = usePage().props; // Ambil data user dari props

  // Cek apakah user memiliki role Admin
  const isAdmin = auth?.user?.roles?.includes('Admin');

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

  return (
    <>
      <Drawer
        size="xs"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        styles={{
          body: {
            padding: 0,
            height: '100%',
          },
        }}
      >
        <Group gap={0} justify="space-between" p={16}>
          <Group gap={0}>
            <ActionIcon variant="transparent">
              <IconArchive size={32} />
            </ActionIcon>

            <Title order={3}>Dokar Digi</Title>
          </Group>

          <ActionIcon variant="subtle" onClick={close} color="gray">
            <IconX />
          </ActionIcon>
        </Group>

        <Divider />

        <Box flex={1} p={16}>
          {navItems.map(({ label, route, onClick, ...props }) => {
            const isActive = window.location.pathname.includes(route);

            return (
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
            );
          })}
        </Box>
      </Drawer>

      <ActionIcon
        onClick={open}
        display={{
          base: 'block',
          sm: 'none',
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
