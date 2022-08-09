import React from 'react'

const LatestNews = ({news}) => {
  const newsNodes = news.map((item, i) => {
    return <li key={i}>{item.headline}</li> 
  })
  
    return (
    <div>
    <h4>Latest News</h4>
    <ul>
        {newsNodes}
    </ul>
    </div>
  )
}

export default LatestNews