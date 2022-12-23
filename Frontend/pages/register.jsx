import { agent } from '../agent';
import { formToJSON } from 'axios';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import Button from '@mui/material/Button';
import Form from '../containers/login/Form';
import Layout from '../containers/login/Layout';
import { TextField } from '../components/TextField';
import FormContainer from '../containers/login/FormContainer';
import { FieldsContainer } from '../containers/login/FieldsContainer';

export default function Register() {

  const router = useRouter();

  const registerUserMutation = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: async (data)=> {
      await agent.User.register({...data, image: "https://localhost:4000"});
      router.push("/tasks");
    }
  })

  const handleSubmit = (ev)=> {
    ev.preventDefault();
    const form = ev.target;
    const data = formToJSON(form);
    registerUserMutation.mutate(data);
  }

  const sxRegister = {
    width: "100vw",
    minHeight: "100vh" 
  }

  return (
    <Box sx={sxRegister}>
      <Layout 
        title="REGISTRARME" 
        phrase="Ingrese los siguientes datos para registrarte">
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <FieldsContainer>
              <TextField 
                name="username"
                label="Nombre"
                placeholder="ej: bizapro123@gmail.com"/>
              <TextField 
                name="email"
                label="Correo"
                placeholder="ej: bizapro123@gmail.com"/>
              <TextField 
                name="password"
                label="Contraseña"
                placeholder="ej: 1234"/>
            </FieldsContainer>
            <Button 
              fullWidth 
              type="submit"
              variant="contained">Continuar</Button>
          </FormContainer>
        </Form>
      </Layout>
    </Box>
  ) 
}
