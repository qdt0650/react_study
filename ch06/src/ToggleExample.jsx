import useToggle from './useToggle'

function ToggleExample() {
   const [isToggle, toggle] = useToggle(false)
   return (
      <>
         <div>
            <button type="button" onClick={toggle}>
               {isToggle ? '끄기' : '켜기'}
            </button>
            {isToggle && <p>토글 상태가 켜져 있습니다.</p>}
         </div>
      </>
   )
}

export default ToggleExample
