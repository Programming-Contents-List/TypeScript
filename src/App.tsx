import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import ButtonComponents from "./shared/components/button.components";  //원문 파일
import ButtonComponents from "./shared/components/Button.components.test";  //Test 파일로 대체
import { validateData } from "./test"; // test.ts 파일을 

const Button = ButtonComponents;

function App() {
  // const [count, setCount] = useState(0);
  // '#3d3da1' : '#5353ea'
  useEffect(() => {
    // 컴포넌트가 마운트될 때 test.ts의 validateData 함수 실행
    validateData();
  }, []);

  return (
    <div>
      <div style={{marginBottom: '10px'}}>test</div>
      <Button EnterColor={'#3d3da1'} LeaveColor={'#5353ea'}/>
    </div>
  );
}

export default App;
