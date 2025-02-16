import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

const Index = (props) => {
  return (
    <AuthenticatedLayout
      title="Daftar Pengguna"
      notification={props.notification}
    ></AuthenticatedLayout>
  );
};

export default Index;
