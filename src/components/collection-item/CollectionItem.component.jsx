import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../../redux/cart/cart.actions'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import CustomButton from '../custom-button/CustomButton.component'

import './collection-item.styles.scss'

const CollectionItem = ({ item }) => {

   const currentUser = useSelector(selectCurrentUser)
   const dispatch = useDispatch()
   const navigate = useNavigate();

   const { imageUrl, name, price } = item

   return (
      <div className='collection-item' >
         <div
            style={{
               background: `url(${imageUrl}) center/cover`
            }}
            className='photo' />
         <div className='footer'>
            <span className="item-name">{name}</span>
            <span className="item-price">${price}</span>
         </div>
         <CustomButton isInverted
            onClick={() => currentUser ? dispatch(addItem(item)) : navigate('/signin')}
         >add to cart</CustomButton>
      </div >
   )
}

export default CollectionItem
