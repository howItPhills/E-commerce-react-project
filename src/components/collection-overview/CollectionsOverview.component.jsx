import { useSelector } from 'react-redux'

import { selectShopPageCollectionsArray } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/CollectionPreview.component'

import { withSpinner } from '../with-spinner/withSpinner.HOC'

import './collection-overview.styles.scss'


const CollectionsOverview = () => {
   const collections = useSelector(selectShopPageCollectionsArray)

   return (
      <div className='collections'>
         {collections.map(({ id, title, items, routeName }) => <CollectionPreview key={id} routeName={routeName} title={title} items={items} />)}
      </div>
   )
}

export default withSpinner(CollectionsOverview)