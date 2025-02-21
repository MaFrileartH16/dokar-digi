import { Select } from '@/Components/Index.jsx';
import { router, usePage } from '@inertiajs/react';
import { Avatar, Menu } from '@mantine/core';
import { IconLogout, IconSettings } from '@tabler/icons-react';
import { useState } from 'react';

const UserMenu = () => {
  const {
    auth: { user },
  } = usePage().props; // Mengambil user dari Inertia props
  const roles = ['Admin', 'Petugas', 'Penyetuju']; // Bisa juga dari backend
  const [selectedRole, setSelectedRole] = useState(user.roles[0]); // Simpan peran user saat ini
  const [menuOpened, setMenuOpened] = useState(false); // Kontrol menu terbuka/tutup

  const handleRoleChange = (value) => {
    setSelectedRole(value); // Update UI lokal
    router.post(route('roles.change'), { role: value }); // Kirim ke backend
  };

  return (
    <Menu
      width={200}
      position="bottom-end"
      offset={8}
      opened={menuOpened}
      onOpenChange={setMenuOpened} // Mengontrol state `opened`
    >
      <Menu.Target
        style={{ cursor: 'pointer' }}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <Avatar alt={user.name} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label py={8} px={0}>
          Peran
        </Menu.Label>
        <Menu.Item
          p={0}
          styles={{
            itemLabel: {
              marginLeft: 0,
            },
          }}
        >
          <Select
            data={roles}
            value={selectedRole} // Gunakan `value` agar update secara real-time
            onChange={handleRoleChange}
            onMouseDown={(e) => e.stopPropagation()} // Mencegah menu tertutup saat memilih
            placeholder="Pilih peran"
          />
        </Menu.Item>

        <Menu.Divider my={8} />

        <Menu.Item
          p={16}
          leftSection={<IconSettings />}
          onClick={() => router.get(route('settings'))}
        >
          Pengaturan
        </Menu.Item>
        <Menu.Item
          p={16}
          leftSection={<IconLogout />}
          color="red"
          onClick={() => router.post(route('logout'))}
        >
          Keluar
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
