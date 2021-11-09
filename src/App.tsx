import { useRecoilState, useRecoilValue } from "recoil";
import { housrSelector, minState } from "./atoms";

function App() {
  const [min, setMin] = useRecoilState(minState);
  const hour = useRecoilValue(housrSelector);
  const onMinChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMin(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={min}
        onChange={onMinChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hour} type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
