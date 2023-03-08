import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Background } from "./style";

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie a sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar"></Button>

        <Link to="/">
          <div>
            <FiArrowLeft />

            Voltar para o login
          </div>
        </Link>

      </Form>
    </Container>
  );
};
