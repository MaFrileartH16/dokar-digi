import {
  AuthenticatedHeader,
  AuthenticatedNavBar,
  PageHeadings,
} from '@/Components/Index.jsx';
import { BaseLayout } from '@/Layouts/Index.jsx';
import { Box, Divider, Flex, Stack } from '@mantine/core';

const AuthenticatedLayout = (props) => {
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
              title={props.pageHeadings.title}
              breadcrumbs={props.pageHeadings.breadcrumbs}
              description={props.pageHeadings.description}
            />

            {props.children}
          </Box>
        </Stack>
      </Flex>
    </BaseLayout>
  );
};

export default AuthenticatedLayout;
