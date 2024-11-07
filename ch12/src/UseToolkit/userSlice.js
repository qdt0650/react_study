import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user', // slice 이름지정
   initialState: { name: '', age: 0 }, // state 초기값 설정
   reducers: {
      setName: (state, action) => {
         state.name = action.payload // state에 있는 name 값을 payload(input창에서 입력한) 값으로 변경
      },
      setAge: (state, action) => {
         state.age = action.payload // state에 있는 age 값을 payload 값으로 변경
      },
   },
})

export default userSlice.reducer // 리듀서를 내보냄
export const { setName, setAge } = userSlice.actions // setName, setAge 내보냄
