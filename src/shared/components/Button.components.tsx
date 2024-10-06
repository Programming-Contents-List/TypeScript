import { useState } from "react";
import Z from "zod";

//interface
//Zod about props
// 1. zod로 props 스키마 정의
const buttonPropsSchema = Z.object({
  EnterColor: Z.string(),
  LeaveColor: Z.string(),
})

// 2. TypeScript 타입으로 추출
type ButtonProps = Z.infer<typeof buttonPropsSchema>;

const ButtonComponents = ({EnterColor, LeaveColor}:ButtonProps) => {
  const [isHover, setHover] = useState(false);

  return (
    <div>
      <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '50px',
          background: isHover ? EnterColor : LeaveColor,
          color: 'white',
          borderRadius: '7px',
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => {
          console.log('Button clicked');
        }}
        role="button" // 접근성 향상
      >
        Button
        </div>
      </div>
    </div>
  )
};

export default ButtonComponents;