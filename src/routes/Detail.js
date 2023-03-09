import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Detail.css';
// 프랍스 전달

function Detail() {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  if(location.state === undefined){
    navigate('/'); //홈으로 이동 즉 리다이렉트 기능이다.
  }

  const {genres,poster,summary,title,year} = location.state;

  return (
    <div className='detail'>

      <img src={poster} alt={title} title={title} />
      <div className='detail_data'>
        <h3 className='detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
        <h4 className='detail_year'>{year}</h4>
        <ul className='detail_genres'>
        {genres.map((genres,index)=>{
          return(
          <li className='detail_genre' key={index}>{genres}</li>
          )
        })}
        </ul>
        <p className='detail_summary'>{summary.slice(0,180)}...</p>
        {/* 이거 디테일인데 ... 없애고 싶당 */}
      </div>
    </div>
  )
}

export default Detail