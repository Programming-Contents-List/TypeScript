import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { validateData } from "./test"; // test.ts 파일을 import

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 test.ts의 validateData 함수 실행
    validateData();
  }, []);

  return (
    <div>
      <div style={{marginBottom: '10px'}}>test</div>
      <div style={{ 
        display:'flex', 
        justifyContent:'center', 
        alignItems: 'center', 
        width: '100px', 
        height: '50px', 
        background: '#5353ea', 
        color: 'white', 
        borderRadius: '7px',
      }} onClick={() => { 
        console.log('test');
      }}>Button</div>
    </div>
  );
}

export default App;
