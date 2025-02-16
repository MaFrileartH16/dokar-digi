import { ActionIcon, Menu, useMantineColorScheme } from '@mantine/core';
import { IconDeviceFloppy, IconMoon, IconSun } from '@tabler/icons-react';

function ThemeToggle() {
  const { colorScheme, setColorScheme, clearColorScheme } =
    useMantineColorScheme();

  // Opsi tema
  const themeOptions = [
    { label: 'Light', value: 'light', icon: <IconSun size={14} /> },
    { label: 'Dark', value: 'dark', icon: <IconMoon size={14} /> },
    { label: 'Auto', value: 'auto', icon: <IconDeviceFloppy size={14} /> },
    {
      label: 'Clear',
      value: 'clear',
      icon: <IconDeviceFloppy size={14} />,
      isClear: true,
    },
  ];

  // Fungsi untuk mengubah tema atau menghapus pengaturan
  const handleThemeChange = (value) => {
    if (value === 'clear') {
      clearColorScheme();
    } else {
      setColorScheme(value);
    }
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          {colorScheme === 'dark' ? (
            <IconMoon stroke={1.5} />
          ) : (
            <IconSun stroke={1.5} />
          )}
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Theme Settings</Menu.Label>
        {themeOptions.map((option) => (
          <Menu.Item
            key={option.value}
            onClick={() => handleThemeChange(option.value)}
            leftSection={option.icon}
          >
            {option.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export default ThemeToggle;
