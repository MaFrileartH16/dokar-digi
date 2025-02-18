// import '@/echo.js';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { useForm, usePage } from '@inertiajs/react';
import {
  ActionIcon,
  Checkbox,
  Divider,
  Flex,
  Paper,
  Table,
  Tooltip,
} from '@mantine/core';
import { IconShieldPlus } from '@tabler/icons-react';

const Index = () => {
  const { permissions, role } = usePage().props;
  const { data, setData, post } = useForm({
    permissions: role.permissions.map((permission) => permission.id),
  });

  const isPermissionsUnchanged =
    JSON.stringify(data.permissions.sort()) ===
    JSON.stringify(role.permissions.map((permission) => permission.id).sort());

  const handleCheckboxChange = (permissionId) => {
    setData(
      'permissions',
      data.permissions.includes(permissionId)
        ? data.permissions.filter((id) => id !== permissionId)
        : [...data.permissions, permissionId],
    );
  };

  const handleAssignPermissions = () => {
    post(route('roles.permissions.give', role), {
      data: { permissions: data.permissions },
    });
  };

  const rows = permissions.map((permission, index) => (
    <Table.Tr key={permission.id} h={48} style={{ whiteSpace: 'nowrap' }}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{permission.name}</Table.Td>
      <Table.Td>
        <Checkbox
          checked={data.permissions.includes(permission.id)}
          onChange={() => handleCheckboxChange(permission.id)}
        />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <AuthenticatedLayout
      title="Daftar Izin"
      pageHeadings={{
        description: 'Kelola izin: pilih, dan kelola izin dengan mudah.',
        breadcrumbs: [
          { title: 'Peran', route: 'roles.index' },
          { title: role.name },
          { title: 'Hak Akses', route: 'roles.permissions.index', data: role },
        ],
      }}
    >
      <Paper shadow="none">
        <Flex p={16} justify="space-between">
          <Tooltip label="Beri Izin" position="top">
            <ActionIcon
              onClick={handleAssignPermissions}
              disabled={isPermissionsUnchanged}
            >
              <IconShieldPlus />
            </ActionIcon>
          </Tooltip>
        </Flex>

        <Divider />

        <div style={{ overflowX: 'auto' }}>
          <Table style={{ minWidth: '100px', whiteSpace: 'nowrap' }}>
            <Table.Thead h={48}>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Nama Izin</Table.Th>
                <Table.Th>Beri Akses</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </Paper>
    </AuthenticatedLayout>
  );
};

export default Index;
