import { router, usePage } from '@inertiajs/react'; // Gunakan usePage untuk mendapatkan data user
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Drawer,
  Group,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconArchive,
  IconDashboard,
  IconDashboardFilled,
  IconFile,
  IconFileFilled,
  IconMenu4,
  IconShieldLock,
  IconShieldLockFilled,
  IconUser,
  IconUserFilled,
  IconX,
} from '@tabler/icons-react';

const NavBarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { auth } = usePage().props; // Ambil data user dari props

  // Cek apakah user memiliki role Admin
  const isAdmin = auth?.user?.roles?.includes('Admin');

  // Definisi menu navigasi dengan filter peran
  const navItems = [
    {
      label: 'Dasbor',
      leftSection: (isActive) =>
        isActive ? <IconDashboardFilled /> : <IconDashboard />,
      route: 'dashboard',
      onClick: () => router.get(route('dashboard')),
    },
    isAdmin && {
      label: 'Pengguna',
      leftSection: (isActive) => (isActive ? <IconUserFilled /> : <IconUser />),
      route: 'users',
      onClick: () => router.get(route('users.index')),
    },
    isAdmin && {
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
  ].filter(Boolean); // Hapus item `null` dari array

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
          {navItems.map(({ label, route, leftSection, onClick }) => {
            const isActive = window.location.pathname.includes(route);

            return (
              <Button
                key={label}
                color={isActive ? 'blue' : 'gray'}
                display="flex"
                fullWidth
                variant="subtle"
                leftSection={leftSection(isActive)}
                onClick={onClick}
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
