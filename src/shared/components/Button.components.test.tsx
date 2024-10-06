import { useState } from "react";
import Z from "zod";

//interface
//Zod about props
// 1. zod로 props 스키마 정의
const buttonPropsSchema = Z.object({  //4. Error: 런타임 Props 검증, Parse 미사용으로 Error 발생
  EnterColor: Z.string(),
  LeaveColor: Z.string(),
})

// 2. TypeScript 타입으로 추출
type ButtonProps = Z.infer<typeof buttonPropsSchema>;

// 2-1. 바로 타입만 추출하고 스키마 제거
/** 
type ButtonProps = z.infer<
  z.object({
    EnterColor: z.string(),
    LeaveColor: z.string(),
  })
>;
*/
// 3. 컴포넌트에 타입 설정: FC Generics로 적용하지 않고 해당 Props에 Type을 적용
// FC 사용방법은 PR Link 참고
const ButtonComponents = (props:ButtonProps) => {
  const [isHover, setHover] = useState(false);

  // 4-1. 직접적으로 Props 변수를 생성
  const { EnterColor, LeaveColor } = props;

  // 4-2. 런타임 Props 검증
  try {
    buttonPropsSchema.parse(props);
    console.log("Props validation successful"); // 유효성 검증이 성공하면 이 메시지가 출력됩니다.
  } catch (err) {
    console.error("Props validation failed", err); // 검증 실패 시 오류 메시지 출력
  }

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