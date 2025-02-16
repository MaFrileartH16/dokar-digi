import { usePage } from '@inertiajs/react';
import { Avatar, Flex, Menu } from '@mantine/core';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';

const AuthenticatedHeader = () => {
  const user = usePage();
  console.log(user);

  const menuItems = [
    { label: 'Profile', icon: <IconUser /> },
    { label: 'Settings', icon: <IconSettings /> },
    { label: 'Logout', icon: <IconLogout />, color: 'red' },
  ];

  return (
    <Flex w="100%" p={16} justify="end" bg="gray.0">
      <Menu width={200} position="bottom-end" offset={8} opened={true}>
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
    </Flex>
  );
};

export default AuthenticatedHeader;
