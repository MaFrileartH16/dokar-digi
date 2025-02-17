import { Select } from '@/Components/Index.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { router } from '@inertiajs/core';
import { usePage } from '@inertiajs/react';
import {
  ActionIcon,
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  Pagination,
  Paper,
  Table,
  Text,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';

const Index = () => {
  const { users, filters } = usePage().props;
  const { data, total, from, to, last_page, current_page, path } = users;

  const [perPage, setPerPage] = useState(filters.per_page || 5);
  const [activePage, setActivePage] = useState(current_page || 1);

  const handlePerPageChange = (value) => {
    setPerPage(value);
    setActivePage(1);
    router.get(path, { page: 1, per_page: value });
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= last_page) {
      setActivePage(page);
      router.get(path, { page, per_page: perPage });
    }
  };

  const rows = data.map((user, index) => (
    <Table.Tr key={user.id} h={48}>
      <Table.Td>{from + index}</Table.Td>
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
        >
          {user.roles[0] || '-'}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ));

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
          <Button>Tambah Pengguna</Button>
        </Flex>

        <Divider />

        {/* Tambahkan wrapper dengan overflow */}
        <div style={{ overflowX: 'auto' }}>
          <Table style={{ minWidth: '100px' }}>
            <Table.Thead h={48}>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Nama Lengkap</Table.Th>
                <Table.Th>ALamat Surel</Table.Th>
                <Table.Th>Peran</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>

        <Divider />

        <Group
          justify="space-between"
          align="start"
          p={16}
          display={{ base: 'flex', md: 'none' }}
        >
          <ActionIcon
            variant="default"
            onClick={() => handlePageChange(activePage - 1)}
            disabled={activePage === 1}
          >
            <IconChevronLeft />
          </ActionIcon>

          <Flex
            gap={4}
            align="center"
            direction={{
              base: 'column',
              xs: 'row',
            }}
          >
            <Select
              w={80}
              value={perPage}
              onChange={handlePerPageChange}
              allowDeselect={false}
              data={['5', '10', '20', '50']}
            />

            <Text align="center">
              {from}-{to} dari {total}
            </Text>
          </Flex>

          <ActionIcon
            variant="default"
            onClick={() => handlePageChange(activePage + 1)}
            disabled={activePage === last_page}
          >
            <IconChevronRight />
          </ActionIcon>
        </Group>

        <Flex
          p={16}
          justify="space-between"
          align="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Group>
            <Select
              w={80}
              value={perPage}
              onChange={handlePerPageChange}
              allowDeselect={false}
              data={['5', '10', '20', '50']}
            />
            <Text>
              {from}-{to} dari {total}
            </Text>
          </Group>

          {/* Desktop Pagination */}
          <Pagination
            total={last_page}
            value={activePage}
            onChange={handlePageChange}
            display={{ base: 'none', sm: 'flex' }}
          />
        </Flex>
      </Paper>
    </AuthenticatedLayout>
  );
};

export default Index;
