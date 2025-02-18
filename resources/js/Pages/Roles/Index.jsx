import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { router, usePage } from '@inertiajs/react';
import {
  ActionIcon,
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
  const { roles } = usePage().props; // Fetch roles instead of users

  const [opened, { open, close }] = useDisclosure(false); // Modal state for delete confirmation
  const [roleToDelete, setRoleToDelete] = useState(null); // Store the role to delete

  const rows = roles.map((role, index) => (
    <Table.Tr key={role.id} h={48} style={{ whiteSpace: 'nowrap' }}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{role.name}</Table.Td> {/* Display the role name */}
      <Table.Td>
        <Flex gap={8} justify="flex-start">
          {/* Edit Button */}
          <ActionIcon
            color="yellow"
            variant="subtle"
            onClick={() => handleEdit(role.id)}
          >
            <IconEdit />
          </ActionIcon>

          {/* Delete Button */}
          <ActionIcon
            color="red"
            variant="subtle"
            onClick={() => handleDelete(role)}
          >
            <IconTrash />
          </ActionIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  const handleEdit = (roleId) => {
    router.get(route('roles.edit', { role: roleId })); // Pass the role ID correctly
  };

  const handleDelete = (role) => {
    setRoleToDelete(role); // Set the role to be deleted in state
    open(); // Open delete confirmation modal
  };

  const confirmDelete = () => {
    if (roleToDelete) {
      router.delete(route('roles.destroy', { role: roleToDelete.id })); // Pass the role ID correctly
    }
    close(); // Close modal after action
  };

  return (
    <AuthenticatedLayout
      title="Daftar Peran"
      pageHeadings={{
        description:
          'Kelola peran: tambah, perbarui, dan hapus pren dengan efisien.',
      }}
    >
      <Paper shadow="none">
        <Flex p={16} justify="space-between">
          <ActionIcon onClick={() => router.get(route('roles.create'))}>
            <IconPlus />
          </ActionIcon>
        </Flex>

        <Divider />

        <div style={{ overflowX: 'auto' }}>
          <Table style={{ minWidth: '100px', whiteSpace: 'nowrap' }}>
            <Table.Thead h={48}>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Nama</Table.Th> {/* Only role name */}
                <Table.Th>Aksi</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </Paper>

      {/* Delete Confirmation Modal */}
      <Modal opened={opened} onClose={close} title="Konfirmasi Hapus Role">
        <p>Apakah Anda yakin ingin menghapus role ini?</p>
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
