import styled from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
// 백틱안에 css를 작성(css 코드와 똑같이 작성)
const StyleButton = styled.button`
   color: white;
   background-color: green;
`

function ReactButton2() {
   // style-component를 이용해서 버튼 만들기
   return <StyleButton>버튼</StyleButton>
}

export default ReactButton2
