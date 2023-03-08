import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              <p>Voltar</p>
            </Link>

            <h1>Novo filme</h1>
          </header>

          <div className="middle">
            <Input placeholder="Título" />

            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />

              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div className="middle">
            <Button title="Excluir filme" />

            <Button title="Salvar" />
          </div>
        </Form>
      </main>
    </Container >
  );
};
