import {
  Box,
  PasswordInput as PasswordInputMantine,
  Text,
} from '@mantine/core';

const PasswordInput = ({ label, description, error, ...props }) => {
  return (
    <Box>
      <Text fw={500}>{label}</Text>

      {description && (
        <Text c="gray" mb={8}>
          {description}
        </Text>
      )}

      <PasswordInputMantine
        mt={description ? 0 : 8}
        {...props}
        styles={{
          input: {
            borderColor: error ? 'red' : undefined,
          },
        }}
      />

      {error && (
        <Text c="red" mt={8}>
          {error}
        </Text>
      )}
    </Box>
  );
};

export default PasswordInput;
