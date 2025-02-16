import {
  AuthenticatedHeader,
  AuthenticatedNavBar,
  PageHeadings,
} from '@/Components/Index.jsx';
import { BaseLayout } from '@/Layouts/Index.jsx';
import { Box, Divider, Flex, Stack } from '@mantine/core';

const AuthenticatedLayout = (props) => {
  const { pageHeadings = {} } = props; // Destructure and give default empty object
  const { breadcrumbs = [], description } = pageHeadings; // Safe destructuring

  return (
    <BaseLayout title={props.title} notification={props.notification}>
      <Flex flex={1}>
        <AuthenticatedNavBar />

        <Stack gap={0} w="100%">
          <AuthenticatedHeader />

          <Divider />

          <Box
            flex={1}
            py={32}
            px={{
              base: 16,
              md: 32,
            }}
          >
            <PageHeadings
              title={props.title}
              breadcrumbs={breadcrumbs} // Pass safely
              description={description} // Pass safely
            />

            {props.children}
          </Box>
        </Stack>
      </Flex>
    </BaseLayout>
  );
};

export default AuthenticatedLayout;
