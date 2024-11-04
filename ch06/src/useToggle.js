import React, { useState } from 'react'

// 토글(toggle)기능 hooks
function useToggle(initialValue) {
   const [value, setValue] = useState(initialValue)

   const toggle = () => {
      setValue(!value) // true -> false, f -> t
   }
   return [value, toggle] // state와 함수가 있는 배열 리턴
}

export default useToggle
