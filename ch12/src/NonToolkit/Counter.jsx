import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => state.value)
   return (
      <>
         <div>
            <button
               type="button"
               onClick={() => {
                  dispatch({ type: 'up', step: 2 })
               }}
            >
               +
            </button>
            {count}
         </div>
      </>
   )
}

export default Counter
