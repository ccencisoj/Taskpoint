import { agent } from "../agent";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { LoginLayout } from "../layouts/LoginLayout/LoginLayout";

export default function Register() {

  const router = useRouter();

  const registerUserMutation = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: (data)=> agent.User.register({...data, image: "http"}),
    onSuccess: ()=> router.push("/tasks")
  })

  return (
    <LoginLayout>
      <LoginForm
        windowResponsive={true}
        onSubmit={(data)=> registerUserMutation.mutate(data)}
        title="REGISTRARME"
        description="Ingrese los siguientes datos para registrarte"
        inputs={[
          {type: "text", as: "textfield", name: "username", label: "Nombre", placeholder: "ej: cristian"},
          {type: "text", as: "textfield", name: "email", label: "Correo", placeholder: "ej: bizapro123@gmail.com"},
          {type: "password", as: "textfield", name: "password", label: "Contraseña", placeholder: "ej: 1234"},
        ]}
        actions={[
          {type: "submit", as: "primarybutton", label: "Continuar"}
        ]}
        footer={{
          hrefDescription: "¿Ya tienes una cuenta?",
          hrefLabel: "iniciar sesion",
          href: "/login"
        }}
      />
    </LoginLayout>
  )
}
