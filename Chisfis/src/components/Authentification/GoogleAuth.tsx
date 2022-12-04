import { GoogleSignInButton } from '@tailwindcss/ui';

// Set your client ID and scope
const clientId = '1004484885880-3cac4lgdbqubcfnc9u92euei4h4jhsei.apps.googleusercontent.com';
const scope = 'https://www.googleapis.com/auth/plus.login';

// Initialize the Google Sign-In API
const gapi = (window as any).gapi;
gapi.load('auth2', () => {
  gapi.auth2.init({ client_id: clientId, scope });
});

// Function to handle the login button click
const handleLogin = () => {
  gapi.auth2
    .getAuthInstance()
    .signIn()
    .then((googleUser) => {
      // Retrieve the Google authentication token
      const token = googleUser.getAuthResponse().id_token;
      // Use the token to authenticate the user
      // ...
    });
};

// Export the login button component
export const LoginButton = () => (
  <GoogleSignInButton onClick={handleLogin} />
);