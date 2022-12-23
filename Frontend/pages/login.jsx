import { agent } from "../agent";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { LoginLayout } from "../layouts/LoginLayout/LoginLayout";

export default function Login() {

  const router = useRouter();

  const loginUserMutation = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: agent.User.login,
    onSuccess: ()=> router.push("/tasks")
  })

  return (
    <LoginLayout>
      <LoginForm
        windowResponsive={true}
        onSubmit={(data)=> loginUserMutation.mutate(data)}
        title="INICIAR SESION"
        description="Ingrese los siguientes datos para inciar sesión"
        inputs={[
          {type: "text", as: "textfield", name: "email", label: "Correo", placeholder: "ej: bizapro123@gmail.com"},
          {type: "password", as: "textfield", name: "password", label: "Contraseña", placeholder: "ej: 1234"},
        ]}
        actions={[
          {type: "submit", as: "primarybutton", label: "Continuar"}
        ]}
        footer={{
          hrefDescription: "¿No tienes una cuenta?",
          hrefLabel: "registrarme",
          href: "/register"
        }}
      />
    </LoginLayout>
  )
}
