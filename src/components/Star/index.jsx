import { Container } from "./style";
import { FiStar } from "react-icons/fi";

export function Star({ rating }) {
  return (
    <Container>
      <FiStar color="#FF859B" fill={rating >= 1 ? "#FF859B" : "none"} />
      <FiStar color="#FF859B" fill={rating >= 2 ? "#FF859B" : "none"} />
      <FiStar color="#FF859B" fill={rating >= 3 ? "#FF859B" : "none"} />
      <FiStar color="#FF859B" fill={rating >= 4 ? "#FF859B" : "none"} />
      <FiStar color="#FF859B" fill={rating >= 5 ? "#FF859B" : "none"} />
    </Container >
  );
};
