import React, { useReducer, useState } from 'react'

function ReducerCounter3() {
   // [state값, dispath로 사용할 함수의 이름] = (reducer로 사용할 함수 이름, state 초기값)
   const [count, countDispath] = useReducer(countReducer, 0)
   const [number, setNumber] = useState(1)

   // reducer 함수 : 직접 state를 변경한다(회계직원 역할)
   function countReducer(oldCount, action) {
      console.log(action)

      // (현재 state, dispath에서 전달받은 action)
      if (action.type === 'UP') {
         return oldCount + action.number // return 실행시 state가 업데이트
      } else if (action.type === 'DOWN') {
         return oldCount - action.number
      } else if (action.type === 'RESET') {
         return 0
      }
   }

   // dispath 함수: 이벤트가 발생시 reducer 함수를 실행시키면서 action을 전달(창구 직원 역할)
   // dispath에서 매개변수가 2개 이상의 값을 전달하고 싶을땐 json객체 형태로 전달, action은 type key값으로 전달
   const down = () => countDispath({ type: 'DOWN', number: number })
   const reset = () => countDispath({ type: 'RESET', number: number })
   const up = () => countDispath({ type: 'UP', number: number })

   const changeNumber = (e) => setNumber(Number(e.target.value))

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <input type="text" value={number} onChange={changeNumber} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter3
