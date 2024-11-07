import React, { useState } from 'react'

function ReactButton1() {
   // 기존 리액트에서 인라인 스타일 적용하는 방법
   const style = {
      color: 'white',
      backgroundColor: 'purple',
   }
   return (
      <button type="button" style={style}>
         버튼
      </button>
   )
}

export default ReactButton1
