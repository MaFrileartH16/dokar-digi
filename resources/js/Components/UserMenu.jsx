import { router } from '@inertiajs/core';
import { Avatar, Menu } from '@mantine/core';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';

const UserMenu = () => {
  const menuItems = [
    { label: 'Profil', leftSection: <IconUser /> },
    { label: 'Pengaturan', leftSection: <IconSettings /> },
    {
      label: 'Keluar',
      leftSection: <IconLogout />,
      color: 'red',
      onClick: () => router.post(route('logout')),
    },
  ];

  return (
    <Menu width={200} position="bottom-end" offset={8}>
      <Menu.Target
        style={{
          cursor: 'pointer',
        }}
      >
        <Avatar alt="User" />
      </Menu.Target>

      <Menu.Dropdown>
        {menuItems.map(({ label, ...props }, index) => (
          <Menu.Item key={index} {...props}>
            {label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
