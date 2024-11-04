//imrs
import React, { useState } from 'react'

// ffc
const EventPractice = () => {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   // input 창에 입력한 값을 state값으로 적용
   const onChangeUsername = (e) => setUsername(e.target.value)
   const onChangeMessage = (e) => setMessage(e.target.value)

   const onClick = () => {
      // 사용자가 input창에 입력한 state값을 출력
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)

      // state값을 초기화(input창의 value도 사라짐)
      setUsername('')
      setMessage('')
   }

   const onKeyDown = (e) => {
      console.log(e.key)

      // enter를 눌렀을때 onClick() 실행
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />

         {/* disabled를 이용해서 첫번째 input창과 두번째 input창 둘다 입력이 되었을때만 버튼 활성화 */}
         <button type="button" onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice
