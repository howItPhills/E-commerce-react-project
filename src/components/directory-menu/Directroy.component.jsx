import React from 'react'
import MenuItem from '../menu-item/MenuItem.component';
import './directory-menu.styles.scss'

class Directory extends React.Component {

   constructor() {
      super();

      this.state = {
         sections: [
            {
               title: 'hats',
               id: 1,
            },
            {
               title: 'jackets',
               id: 2,
            },
            {
               title: 'sneakers',
               id: 3,
            },
            {
               title: 'womens',
               id: 4,
            },
            {
               title: 'mens',
               id: 5,
            },
         ]
      }
   }

   render() {
      return (
         <div className='directory-menu'>
            {this.state.sections.map(({ title, id }) => (
               <MenuItem title={title} key={id} />
            ))}
         </div>
      )
   }
}


export default Directory