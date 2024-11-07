import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      console.log('state ===>', state)
      // state.store에 지정한 슬라이스 key값.value
      return state.counter.value
   })
   return (
      <>
         <div>
            <button
               type="button"
               onClick={() => {
                  dispatch(up(2))
               }}
            >
               +
            </button>
            <button
               type="button"
               onClick={() => {
                  dispatch(down(2))
               }}
            >
               -
            </button>
            {count}
         </div>
      </>
   )
}

export default Counter
