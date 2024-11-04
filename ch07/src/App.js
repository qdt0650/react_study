import React, { useState, useRef, useCallback } from 'react'
import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   // ref 사용시 컴포넌트 렌더링 X, 다른 state에 바뀌면서 재렌더링이 되어도 값이 변경되지 X
   const nextId = useRef(4) // 고유값으로 사용될 id

   // 할 일 등록
   const onInsert = useCallback(
      (text) => {
         const todo = {
            id: nextId.current, // ref의 값을 가져온다
            text, // text: text
            checked: false,
         }

         setTodos(todos.concat(todo))
         nextId.current += 1 // nextId를 1씩 더하기)
      },
      [todos]
   )

   // 할 일 삭제
   const onRemove = useCallback(
      (id) => {
         const removedTodos = todos.filter((todo) => todo.id !== id)
         setTodos(removedTodos)
      },
      [todos]
   )

   // 할 일 완료, 미완료(토글)
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
         setTodos(toggleTodos)
      },
      [todos]
   )

   return (
      <>
         {/* 컴포넌트를 children props로 전달 */}
         <TodoTemplate>
            {/* TodoInsert 컴포넌트에 onInsert함수 전달 */}
            <TodoInsert onInsert={onInsert} />

            {/* todos는 TodoListItem 컴포넌트에서 사용하므로 props로 전달 */}
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
         </TodoTemplate>
      </>
   )
}

export default App
