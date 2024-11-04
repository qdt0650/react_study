import React, { useState } from 'react'

const EventPractice2 = () => {
   // input창이 여러개일때 대처하는 방법
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form
   const onChange = (e) => {
      // form state안에 있는 값들을 바꿔줘야 한다
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }

      setForm(nextForm)
   }

   // 확인 버튼 onClick
   const onClick = () => {
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)

      // form state값의 초기화
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />

         <button type="button" onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice2
