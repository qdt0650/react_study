function App() {
   // 2. () 중괄호를 이용시 자바스크립트 표현식 사용가능
   // if문 대신 삼항 연산자를 주로 사용
   const name = '리액트'
   return (
      <>
         <h2>{name} 안녕!</h2>
         {name === '리액트' ? <h1>리액트입니다.</h1> : <h2>아닙니다.</h2>}
      </>
   )
}

// 컴포넌트를 외부에서 사용할 수 있도록 지정
export default App
