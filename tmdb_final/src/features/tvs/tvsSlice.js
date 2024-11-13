import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTvs } from '../../api/tmdbApi'

// tv목록을 API로부터 가져옴(1페이지만)
export const fetchTVs = createAsyncThunk('tv/fetchTVs', async (type) => {
   const response = await getTvs(type)
   return response.data.results
})

const tvsSlice = createSlice({
   name: 'tvs',
   initialState: {
      loading: false,
      tvs: [],
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchTVs.pending, (state) => {
            state.loading = true
            state.error = null // 새로운 요청 시 에러 초기화
         })
         .addCase(fetchTVs.fulfilled, (state, action) => {
            state.loading = false
            state.tvs = action.payload
         })
         .addCase(fetchTVs.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default tvsSlice.reducer
