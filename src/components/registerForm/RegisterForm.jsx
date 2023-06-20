import { Stack, Input } from '@chakra-ui/react';

const RegisterForm = () => {
    return (
        <Stack spacing={3}>
            <Input placeholder='medium size' size='md' />
            <Input placeholder='medium size' size='md' />
            <Input placeholder='medium size' size='md' />
        </Stack>);
};

export default RegisterForm;