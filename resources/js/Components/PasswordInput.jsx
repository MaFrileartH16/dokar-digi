import { PasswordInput as PasswordInputMantine, Text } from '@mantine/core';

const PasswordInput = ({ label, description, error, ...props }) => {
  return (
    <>
      {label && (
        <Text mb={description ? 0 : 8} fw={500}>
          {label}
        </Text>
      )}

      {description && (
        <Text c="gray" mb={8}>
          {description}
        </Text>
      )}

      <PasswordInputMantine
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
    </>
  );
};

export default PasswordInput;
