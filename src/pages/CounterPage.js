import useCounter from "../hooks/useCounter";
import Button from "../components/Button";



function CounterPage({ initialCount }) {
  const { count, incrementCount } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={incrementCount}>Increase</Button>
    </div>
  );
}

export default CounterPage;
