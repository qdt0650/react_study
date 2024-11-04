import React, { useState } from 'react'
function InputText() {
   // 리액트에서 input창에 입력한 값을 출력하는 방법
   const [text, setText] = useState('')
   return (
      <div>
         {/* change이벤트: select, 체크박스, 라디오,,, 상태가 변경될때 사용 */}
         <input
            type="text"
            value={text}
            onChange={(e) => {
               console.log(e) // 이벤트 정보를 가지고 있는 객체
               setText(e.target.value) // input 창에 입력한 값
               // 입력한 값으로 text State의 값을 바꾼다
            }}
         />
         <p>입력한 값: {text}</p>
      </div>
   )
}

export default InputText
