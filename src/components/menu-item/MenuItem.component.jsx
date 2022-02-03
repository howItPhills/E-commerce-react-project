import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, size, imageUrl, linkUrl }) => {
   const navigate = useNavigate()
   return (
      <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
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

export default MenuItem