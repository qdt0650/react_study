function App() {
   const type = 'radio'
   const str = 'string' // true
   const number = 0 // false
   return (
      <>
         <input type="text" value="리액트" disabled={true} />
         <br />
         <input type="text" value="자바스크립트" disabled={str && number} />
         <br />
         <input type={type} value="라디오" checked={false} />
         선택1
         <br />
         <input type={type} value="라디오" checked={str || number} />
         선택2
      </>
   )
}

// 컴포넌트를 외부에서 사용할 수 있도록 지정
export default App
