import { Button, Stack } from "@mantine/core";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const {loginWithProvider, user, loading} = useAuth()
  const navigate = useNavigate()
  
  const handleProviderLogin = async (provider: any) => {
    try {
      await loginWithProvider(provider)
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  if (user && !loading) {
    return <Navigate to="/" />;
  }

  return (
    (!user && !loading) &&
    <Stack h="100dvh" justify="center" align="center">
      <Button w="100%" maw={300} onClick={() => handleProviderLogin(new GoogleAuthProvider())}>
        Login with Google
      </Button>
      <Button w="100%" maw={300} onClick={() => handleProviderLogin(new FacebookAuthProvider())}>
        Login with Facebook
      </Button>
    </Stack>
  );
};

export default Login;
