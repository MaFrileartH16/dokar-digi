import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

const Dashboard = (props) => {
  return (
    <AuthenticatedLayout
      title="Dasbor"
      notification={props.notification}
    ></AuthenticatedLayout>
  );
};

export default Dashboard;
