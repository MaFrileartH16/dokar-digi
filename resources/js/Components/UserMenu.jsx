import { Avatar, Menu } from '@mantine/core';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';

const UserMenu = () => {
  const menuItems = [
    { label: 'Profil', icon: <IconUser /> },
    { label: 'Pengaturan', icon: <IconSettings /> },
    { label: 'Keluar', icon: <IconLogout />, color: 'red' },
  ];

  return (
    <Menu width={200} position="bottom-end" offset={8}>
      <Menu.Target>
        <Avatar alt="User" />
      </Menu.Target>

      <Menu.Dropdown>
        {menuItems.map((item, index) => (
          <Menu.Item
            key={index}
            leftSection={item.icon}
            color={item.color} // Apply color if provided (e.g., for logout)
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
