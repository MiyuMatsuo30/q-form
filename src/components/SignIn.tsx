import { AuthProvider, AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

const signIn: (provider: AuthProvider, formData: FormData) => void = async(
    provider,
    formData,
) => {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            alert (
                `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`
            );
            resolve();
        }, 300);
    });
    return promise;
};

export default function CredentialSignInPage() {
    const theme = useTheme();
    return (
        <AppProvider theme={theme}>
            <SignInPage signIn={signIn} providers={providers} />
        </AppProvider>
    );
}