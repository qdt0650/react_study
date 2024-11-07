import styled from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
// 백틱안에 css를 작성(css 코드와 똑같이 작성)
const StyleButton = styled.button`
   color: white;
   background-color: green;
`

// 감싸기 기능을 이용해서 StyleButton의 성질을 그대로 가져온다
const LargeButton = styled(StyleButton)`
   font-size: 50px;
`

// 리액트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
   return <button type="button">{props.children}</button>
}

// ReactButton 의 성질을 그대로 가지고 오면서 폰트사이즈 70px의 버튼을 만들고 싶다. => 적용 X
const ReactLargeButton = styled(ReactButton)`
   font-size: 70px;
`

function ReactButton4() {
   // style-component를 이용해서 버튼 만들기
   return (
      <>
         <StyleButton>버튼</StyleButton>
         <br />
         <LargeButton>large버튼</LargeButton>
         <br />
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React large 버튼</ReactLargeButton>
      </>
   )
}

export default ReactButton4
