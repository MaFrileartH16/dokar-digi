import { Box, Text, TextInput as TextInputMantine } from '@mantine/core';

const TextInput = ({ label, description, error, ...props }) => {
  return (
    <Box>
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

      <TextInputMantine
        {...props}
        styles={{
          input: {
            borderColor: error ? 'red' : undefined,
            padding:
              props.leftSection || props.rightSection
                ? '0 16px 0px 56px'
                : '0 16px',
          },
          section: (props.leftSection || props.rightSection) && {
            width: 24,
            margin: '0 16px',
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
