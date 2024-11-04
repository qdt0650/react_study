function App() {
   // 4. 인라인 스타일을 사용한다.
   const name = '리액트'
   // json객체

   // const style = {
   //    backgroundColor: 'red',
   //    color: 'white',
   //    fontSize: '48px',
   //    padding: 16, // 단위 생략시 px로 지정됨
   // }
   // return <div style={style}>{name}</div>
   return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'white',
            fontSize: '48px',
            padding: 16, // 단위 생략시 px로 지정됨
         }}
      >
         {name}
      </div>
   )
}

// 컴포넌트를 외부에서 사용할 수 있도록 지정
export default App
