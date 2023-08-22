import Button from "./Button";
import {
  GiAbstract068,
  GiAlliedStar,
  GiArmoredBoomerang,
} from "react-icons/gi";

function App() {
  return (
    <div>
      <div>
        <Button primary className="mb-5">
          <GiAlliedStar />
          Buy Now!!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          See Deals
        </Button>
      </div>
      <div>
        <Button success outline>
          <GiArmoredBoomerang />
          Something
        </Button>
      </div>
      <div>
        <Button warning rounded outline>
          Duel
        </Button>
      </div>
      <div>
        <Button danger>
          <GiAbstract068 />
          Terminate
        </Button>
      </div>
    </div>
  );
}

export default App;
