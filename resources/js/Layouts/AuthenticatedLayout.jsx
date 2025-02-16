import {
  AuthenticatedHeader,
  AuthenticatedNavBar,
} from '@/Components/Index.jsx';
import { BaseLayout } from '@/Layouts/Index.jsx';
import { Divider, Flex, Stack } from '@mantine/core';

const AuthenticatedLayout = (props) => {
  return (
    <BaseLayout title={props.title} notification={props.notification}>
      <Flex flex={1}>
        <AuthenticatedNavBar />

        <Stack gap={0} w="100%">
          <AuthenticatedHeader />

          <Divider />

          {props.children}
        </Stack>
      </Flex>
    </BaseLayout>
  );
};

export default AuthenticatedLayout;
