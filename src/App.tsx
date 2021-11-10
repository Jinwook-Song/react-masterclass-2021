import { useRecoilState } from "recoil";
import { housrSelector, minState } from "./atoms";

function App() {
  const [min, setMin] = useRecoilState(minState);
  const [hour, setHour] = useRecoilState(housrSelector);
  const onMinChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMin(+event.currentTarget.value);
  };
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHour(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={min}
        onChange={onMinChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        onChange={onHourChange}
        value={hour}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
