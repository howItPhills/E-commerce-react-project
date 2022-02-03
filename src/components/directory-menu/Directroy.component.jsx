import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/MenuItem.component';

import './directory-menu.styles.scss'


const Directory = () => {
   const sections = useSelector(selectDirectorySections)

   return (
      <div className='directory-menu'>
         {sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
         ))}
      </div>
   )
}

export default Directory