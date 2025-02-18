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
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit, IconKey, IconPlus, IconTrash } from '@tabler/icons-react';
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
          {/* Hak Akses Button with Tooltip */}
          <Tooltip label="Hak Akses" position="top">
            <ActionIcon
              color="green"
              variant="subtle"
              onClick={() => handlePermissions(role)} // Handle permissions
            >
              <IconKey />
            </ActionIcon>
          </Tooltip>

          {/* Edit Button with Tooltip */}
          <Tooltip label="Ubah Peran" position="top">
            <ActionIcon
              color="yellow"
              variant="subtle"
              onClick={() => handleEdit(role)} // Handle edit
            >
              <IconEdit />
            </ActionIcon>
          </Tooltip>

          {/* Delete Button with Tooltip */}
          <Tooltip label="Hapus Peran" position="top">
            <ActionIcon
              color="red"
              variant="subtle"
              onClick={() => handleDelete(role)} // Handle delete
            >
              <IconTrash />
            </ActionIcon>
          </Tooltip>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  // Handle route to edit the role
  const handleEdit = (role) => {
    router.get(route('roles.edit', role)); // Navigate to edit page
  };

  // Handle route to manage role permissions
  const handlePermissions = (role) => {
    router.get(route('roles.permissions.index', role)); // Navigate to permissions page
  };

  const handleDelete = (role) => {
    setRoleToDelete(role); // Set the role to be deleted in state
    open(); // Open delete confirmation modal
  };

  const confirmDelete = () => {
    if (roleToDelete) {
      router.delete(route('roles.destroy', { role: roleToDelete })); // Send delete request
    }
    close(); // Close modal after action
  };

  return (
    <AuthenticatedLayout
      title="Daftar Peran"
      pageHeadings={{
        description:
          'Kelola peran: tambah, perbarui, dan hapus peran dengan efisien.',
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
