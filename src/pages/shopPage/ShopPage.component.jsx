import React from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

import SHOP_DATA from '../../shop-data';

class ShopPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         collections: SHOP_DATA
      }
   }

   render() {
      const { collections } = this.state;
      return (
         <div className='shop-page'>
            <h1>Collections</h1>
            <div className='collection'></div>
            {collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview key={id} {...otherCollectionsProps} />)}
         </div>
      )
   }
}

export default ShopPage