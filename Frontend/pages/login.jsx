import { agent } from '../agent';
import { formToJSON } from 'axios';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { useMutation } from 'react-query';
import Form from '../containers/login/Form';
import Layout from '../containers/login/Layout';
import { TextField } from '../components/TextField';
import FormContainer from '../containers/login/FormContainer';
import { getUserFromRequest } from '../helpers/getUserFromRequest';
import { FieldsContainer } from '../containers/login/FieldsContainer';

export default function Login() {

  const router = useRouter();

  const loginUserMutation = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: async (data)=> {
      await agent.User.login(data);
      router.push("/tasks");
    }
  })

  const handleSubmit = (ev)=> {
    ev.preventDefault();
    const form = ev.target;
    const data = formToJSON(form);
    loginUserMutation.mutate(data);
  }

  const sxLogin = {
    width: "100vw",
    minHeight: "100vh" 
  }

  return (
    <Box sx={sxLogin}>
      <Layout 
        title="INICIAR SESION" 
        phrase="Ingrese los siguientes datos para inciar sesión">
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <FieldsContainer>
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


export const getServerSideProps = async ({req})=> {
  
  const user = await getUserFromRequest(req);

  console.log(user);

  return {props: {}};
}
