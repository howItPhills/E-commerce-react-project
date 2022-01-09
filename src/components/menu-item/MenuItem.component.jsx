import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, size, imageUrl, history, match, linkUrl }) => {
   return (
      <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
         <div
            className='background-image'
            style={{
               background: `url(${imageUrl}) center/cover`
            }} />
         <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">shop now</span>
         </div>
      </div>
   )
}

export default withRouter(MenuItem)