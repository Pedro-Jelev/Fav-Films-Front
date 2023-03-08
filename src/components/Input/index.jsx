import { Container } from "./style";

export function Input({ icon: Icon, className, ...rest }) {
  return (
    <Container className={className}>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container >
  );
};
