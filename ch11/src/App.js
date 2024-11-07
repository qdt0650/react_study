import './App.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

// reducer: state를 바꿔주는 역할
function reducer(currentState, action) {
   // currentState가 정의되지 않았을때
   if (currentState === undefined) {
      return { number: 1 } // state값을 업데이트
   }

   // currentState가 정의가 되었을때 state가 업데이트 되는 부분
   const newState = { ...currentState }

   if (action.type === 'PLUS') {
      newState.number++ // number의 값 증가
   }

   return newState // 새롭게 업데이트된 state값을 적용
}

// store: reducer, state를 저장하는 창고 역할
const store = createStore(reducer)

function Left1() {
   return (
      <div>
         <h1>Left1: </h1>
         <Left2></Left2>
      </div>
   )
}

function Left2() {
   return (
      <div>
         <h1>Left2: </h1>
         <Left3></Left3>
      </div>
   )
}
function Left3() {
   // function f(state) {
   //    console.log(state)
   //    return state.number
   // }

   // useSelector: state값을 무선연결해서 가져오기 위한 함수
   // state = {number: 1}
   // 처음 사이트에 접속시 useSelector에서 reducer를 실행시켜서 값을 가져온다(처음 number가 1)
   const number = useSelector((state) => state.number)

   return (
      <div>
         <h1>Left3: {number}</h1>
      </div>
   )
}

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2 />
      </div>
   )
}
function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3 />
      </div>
   )
}
function Right3() {
   // useDispatch는 state 값을 변경할 때 사용
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' })
            }}
         />
      </div>
   )
}

function App() {
   return (
      <>
         <div className="container">
            <h1>Root</h1>
            <div className="grid">
               {/* Provider: store에 저장된 reducer, state를 제공하는 역할을 한다. 제공하고 싶은 컴포넌트를 감싸주면 된다. */}
               {/* Left1, Right1 컴포넌트에서 store에 저장된 reducer와 state를 사용할 수 있다. */}
               <Provider store={store}>
                  <Left1 />
                  <Right1 />
               </Provider>
            </div>
         </div>
         {/* <ReducerCounter1></ReducerCounter1> */}
         {/* <ReducerCounter2></ReducerCounter2> */}
         {/* <ReducerCounter3></ReducerCounter3> */}
      </>
   )
}

export default App
