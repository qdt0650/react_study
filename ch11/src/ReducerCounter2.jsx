import React, { useReducer } from 'react'

function ReducerCounter2() {
   // [state값, dispath로 사용할 함수의 이름] = (reducer로 사용할 함수 이름, state 초기값)
   const [count, countDispath] = useReducer(countReducer, 0)

   // reducer 함수 : 직접 state를 변경한다(회계직원 역할)
   function countReducer(oldCount, action) {
      if (action === 'UP') {
         return oldCount + 1 // return 실행시 state가 업데이트
      } else if (action === 'DOWN') {
         return oldCount - 1
      } else if (action === 'RESET') {
         return 0
      }
   }

   // dispath 함수: 이벤트가 발생시 reducer 함수를 실행시키면서 action을 전달(창구 직원 역할)
   const down = () => countDispath('DOWN')
   const reset = () => countDispath('RESET')
   const up = () => countDispath('UP')

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />

         <br />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter2
