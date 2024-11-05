import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import './AppNavLink.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home..
      </div>
   )
}

let contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]

function Topic() {
   let params = useParams()
   let topic_id = params.topic_id // 경로 파라메터 값을 가지고 온다
   console.log('topics안의 링크 아이디', topic_id)
   let selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }

   for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i]
         break
      }
   }
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         {selected_topic.description}
      </div>
   )
}
function Topics() {
   let lis = []

   for (let i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }
   return (
      <div>
         <h2>Topics</h2>
         <ul>{lis}</ul>
         <Routes>
            {/* <Route path="/1" element={'HTML is...'} />
            <Route path="/2" element={'JS is...'} />
            <Route path="/3" element={'React is...'} /> */}

            {/* http://localhost:3000/topics/? 주소 형태일때 <Topic /> 컴포넌트를 보여준다 */}
            <Route path="/:topic_id" element={<Topic />} />
         </Routes>
      </div>
   )
}
function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact..
      </div>
   )
}
function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />

            {/* 지정한 경로 외에 다른 모든 경로는 Not Found를 보여준다 */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
