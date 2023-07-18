import Card from "../Card/Card";
import useCounter from "../../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
