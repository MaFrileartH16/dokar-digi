import { Button, TextInput } from '@/Components/Index.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { useForm, usePage } from '@inertiajs/react';
import { Paper, Stack } from '@mantine/core';
import { IconCornerDownLeft, IconIdBadge2 } from '@tabler/icons-react';

const Edit = () => {
  const { role } = usePage().props; // Fetch the current role data from props

  // Initialize the form with the current role data
  const form = useForm({
    name: role.name || '', // Using the role's current name as the initial value
  });

  // Validate Role Name
  const validateRoleName = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      form.setError('name', 'Nama peran harus diisi');
    } else {
      form.setError('name', '');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.put(route('roles.update', role.id), {}); // Use PUT request to update the role
  };

  return (
    <AuthenticatedLayout
      title="Edit Peran"
      pageHeadings={{
        description: 'Perbarui peran yang ada di sistem',
        breadcrumbs: [
          {
            title: 'Peran',
            route: 'roles.index',
          },
          {
            title: 'Edit',
          },
        ],
      }}
    >
      <Paper p={32}>
        <form onSubmit={handleSubmit}>
          <Stack>
            {/* Role Name */}
            <TextInput
              value={form.data.name}
              onChange={(e) => {
                form.setData('name', e.target.value);
                validateRoleName(e.target.value); // Trigger validation
              }}
              leftSection={<IconIdBadge2 />}
              label="Nama Peran"
              placeholder="Masukkan nama peran"
              error={form.errors.name}
            />
          </Stack>

          {/* Submit Button */}
          <Button
            fullWidth
            mt={16}
            leftSection={<IconCornerDownLeft />}
            type="submit"
            loading={form.processing} // Show loading state while the form is being processed
            disabled={!form.data.name.trim()}
          >
            Perbarui
          </Button>
        </form>
      </Paper>
    </AuthenticatedLayout>
  );
};

export default Edit;
