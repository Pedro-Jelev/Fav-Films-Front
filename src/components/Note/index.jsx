import { Container } from "./style";
import { Tag } from "../Tag";
import { Star } from "../Star";

export function Note({ Icon, data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Star rating="4"/>

      <p>{data.description}</p>

      {data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>}
    </Container>
  );
};
