function App() {
   // 4. || 연산(A || B) -> A가 true면 A를 렌더링, A가 false면 B를 렌더링

   const name = undefined // false
   return (
      <>
         <div>{name || '리액트'}</div>
      </>
   )
}

// 컴포넌트를 외부에서 사용할 수 있도록 지정
export default App
