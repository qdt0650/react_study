// 인기영화, 현재 상영중 영화, 개봉 예정 영화 결과를 보여주는 페이지

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'

import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'
import MovieCard from '../components/MovieCard'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   /* 
      최초로 메뉴 클릭시 MovieCategory  컴포넌트 렌더링

      이후 메뉴 클릭시 MovieCategory 컴포넌트는 재랜더링 X

      -> 같은 MovieCategory 컴포넌트를 사용하기 때문에 react-router-dom에서 경로가 바뀌어도 새로운 컴포넌트를 렌더링 하지 X

      -> 따라서 state는 메인 페이지에 있다가 최초로 메뉴중 하나를 클릭시 처음에만 1로 지정되고 다른 메뉴 클릭시 1로 초기화 되지 않음

      -> 반드시 useEffect를 사용해 1로 초기화
   */

   // 카테고리 별로 사용할 page 지정
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   /*
      최초로 메뉴 클릭시 MovieCategory  컴포넌트 렌더링

      이후 메뉴 클릭시 MovieCategory 컴포넌트는 재랜더링 X

      -> 같은 MovieCategory 컴포넌트를 사용하기 때문에 react-router-dom에서 경로가 바뀌어도 새로운 컴포넌트를 렌더링 하지 X

      -> 메인페이지에 있다가 최초로 메뉴를 클릭 했을때는 1번 useEffect와 2번 useEffect를 모두 실행한다.

      -> 1번 useEffect에서 page 바뀜, 2번 useEffect API calling이 모두 일어나고 page가 바뀌는 현상때문에 2번 useEffect API calling이 한 번 더 발생한다

      -> 이후 다른 메뉴 클릭시에는 category props만 바뀔뿐 MovieCategory컴포넌트가 재렌더링이 되지는 않으므로 API calling이 2번 되는 현상은 발생하지 X

      -> 다만 해당 카테고리의 page state가 1로 바뀌면서 2번 useEffect가 한 번 실행된다

      -> 따라서 useRef를 사용해 최초로 메뉴 클릭 시에만 1번 useEffect를 실행하지 않도록 만들어준다.(어차피 최초로 메뉴 클릭시엔 page state는 모두 1)
   */

   const isFirstLoad = useRef(true)

   // 1번 useEffect
   // 카테고리가 변경될 때마다 해당 카테고리의 페이지를 1로 초기화
   useEffect(() => {
      if (isFirstLoad.current) {
         isFirstLoad.current = false
         return
      }
      console.log(category + '페이지')
      setPage((prevPage) => ({
         ...prevPage,
         [category]: 1,
      }))
   }, [category])

   // 2. useEffect
   // page가 변할때마다 영화 데이터 로딩
   useEffect(() => {
      // 인기영화 탭 클릭시 {category: "popular", page: 1}
      console.log({ category, page: page[category] })
      dispatch(fetchMovies({ category, page: page[category] }))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch, page])

   // 더보기를 누르면 page state를 1씩 증가
   // loadMore() 실행 -> page state가 변경 -> useEffect 실행
   const loadMore = () => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1, // 1페이지씩 증가
      }))
   }

   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>loading...</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   if (error)
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Error: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            {/* 영화목록 데이터를 movies props로 전달 */}
            <MovieCard movies={movies} />
            <Button variant="outlined" sx={{ margin: '20px auto', display: 'block', width: '500px' }} onClick={loadMore}>
               더보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
