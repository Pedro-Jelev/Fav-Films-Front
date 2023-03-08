import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input className="head-search" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Pedro Jelev</strong>
          <Link to="#">Sair</Link>
        </div>

        <Link to="/profile"><img src="https://github.com/Pedro-Jelev.png" alt="Foto do usuário" /></Link>
      </Profile>
    </Container>
  );
};
