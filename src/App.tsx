import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponents from "./shared/components/button.components";
import { validateData } from "./test"; // test.ts 파일을 

const Button = ButtonComponents;

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 test.ts의 validateData 함수 실행
    validateData();
  }, []);

  return (
    <div>
      <div style={{marginBottom: '10px'}}>test</div>
      <Button/>
    </div>
  );
}

export default App;
