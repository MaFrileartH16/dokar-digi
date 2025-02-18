import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { router, usePage } from '@inertiajs/react';
import {
  ActionIcon,
  Badge,
  Button,
  Divider,
  Flex,
  Modal,
  Paper,
  Table,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

const Index = () => {
  const { users } = usePage().props;

  const [opened, { open, close }] = useDisclosure(false); // Modal state for delete confirmation
  const [userToDelete, setUserToDelete] = useState(null); // Store the user to delete

  const rows = users.map((user, index) => (
    <Table.Tr key={user.id} h={48} style={{ whiteSpace: 'nowrap' }}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{user.full_name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          color={(() => {
            switch (user.roles[0]) {
              case 'Kepala Perpustakaan':
                return 'grape';
              case 'Gugus Mutu':
                return 'cyan';
              case 'Pustakawan':
                return 'teal';
              default:
                return 'gray';
            }
          })()}
          styles={{
            label: {
              whiteSpace: 'nowrap',
              overflow: 'visible',
              textOverflow: 'clip',
              minWidth: 'auto',
            },
          }}
        >
          {user.roles[0] || '-'}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Flex gap={8} justify="flex-start">
          {/* Edit Button */}
          <ActionIcon
            color="yellow"
            variant="subtle"
            onClick={() => handleEdit(user)}
          >
            <IconEdit />
          </ActionIcon>

          {/* Delete Button */}
          <ActionIcon
            color="red"
            variant="subtle"
            onClick={() => handleDelete(user)}
          >
            <IconTrash />
          </ActionIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  const handleEdit = (userId) => {
    router.get(route('users.edit', userId)); // Navigate to edit page
  };

  const handleDelete = (user) => {
    setUserToDelete(user); // Set the user to be deleted in state
    open(); // Open delete confirmation modal
  };

  const confirmDelete = () => {
    if (userToDelete) {
      router.delete(route('users.destroy', userToDelete)); // Send delete request
    }
    close(); // Close modal after action
  };

  return (
    <AuthenticatedLayout
      title="Daftar Pengguna"
      pageHeadings={{
        description:
          'Kelola pengguna: tambah, perbarui, dan hapus akun dengan efisien.',
      }}
    >
      <Paper shadow="none">
        <Flex p={16} justify="space-between">
          <ActionIcon onClick={() => router.get(route('users.create'))}>
            <IconPlus />
          </ActionIcon>
        </Flex>

        <Divider />

        <div style={{ overflowX: 'auto' }}>
          <Table style={{ minWidth: '100px', whiteSpace: 'nowrap' }}>
            <Table.Thead h={48}>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Nama Lengkap</Table.Th>
                <Table.Th>Alamat Surel</Table.Th>
                <Table.Th>Peran</Table.Th>
                <Table.Th>Aksi</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </Paper>

      {/* Delete Confirmation Modal */}
      <Modal opened={opened} onClose={close} title="Konfirmasi Hapus Pengguna">
        <p>Apakah Anda yakin ingin menghapus pengguna ini?</p>
        <Flex gap={16} justify="flex-end">
          <Button variant="default" onClick={close}>
            Batal
          </Button>
          <Button color="red" onClick={confirmDelete}>
            Hapus
          </Button>
        </Flex>
      </Modal>
    </AuthenticatedLayout>
  );
};

export default Index;
