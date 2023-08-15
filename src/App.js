import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary >Buy Now!!</Button>
      </div>
      <div>
        <Button secondary>See Deals</Button>
      </div>
      <div>
        <Button success>Something</Button>
      </div>
      <div>
        <Button warning >Duel</Button>
      </div>
      <div>
        <Button danger >Terminate</Button>
      </div>
    </div>
  );
}

export default App;
