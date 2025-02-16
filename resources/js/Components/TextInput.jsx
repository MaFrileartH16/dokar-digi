import { Box, Text, TextInput as TextInputMantine } from '@mantine/core';

const TextInput = ({ label, description, error, ...props }) => {
  return (
    <Box>
      <Text fw={500}>{label}</Text>

      {description && (
        <Text c="gray" mb={8}>
          {description}
        </Text>
      )}

      <TextInputMantine
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

export default TextInput;
