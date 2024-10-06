import { useState } from "react";

const ButtonComponents = () => {
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
          background: isHover ? '#3d3da1' : '#5353ea',
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