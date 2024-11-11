import React, { useState, useEffect } from 'react'
import { getMovies } from '../../api/tmdbApi'

function MovieList() {
   const [movies, setMovies] = useState([]) // response된 인기영화목록
   const [loading, setLoading] = useState(true) // 로딩여부
   const [error, setError] = useState(null) // 에러 메세지

   // 처음 사이트 들어온 다음 렌더링 직후 1번 실행
   useEffect(() => {
      const fetchMovies = async () => {
         try {
            setLoading(true) // 로딩 중

            // getMovies 함수는 비동기 함수 이므로 완전히 끝날때까지 기다렸다가 결과를 받아와야 한다 -> await 사용
            const MovieList = await getMovies(1) // 1page의 영화목록 가져오기

            console.log(MovieList)

            setMovies(MovieList.data.results) // 인기영화 목록을 movies state에 넣어줌
         } catch (err) {
            setError(err.message) // 에러메세지를 error state에 넣어줌
         } finally {
            setLoading(false) // 로딩완료
         }
      }
      fetchMovies()
   }, [])

   // 로딩 중일때는 Loading 화면 출력
   if (loading) return <p>Loading...</p>

   // 에러 발생시 에러메세지 화면 출력
   if (error) return <p>Error: {error}</p>

   return (
      <>
         <div>
            <h1>인기 영화</h1>
            <ul>
               {movies.map((movie) => (
                  <li key={movie.id}>{movie.title}</li>
               ))}
            </ul>
         </div>
      </>
   )
}

export default MovieList
