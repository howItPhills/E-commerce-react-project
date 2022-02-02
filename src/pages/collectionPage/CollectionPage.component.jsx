import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/CollectionItem.component';
import { withSpinner } from '../../components/with-spinner/withSpinner.HOC';
import { selectCollection } from '../../redux/shop/shop.selectors';


import './collection-page.styles.scss'

const CollectionPage = () => {

   const { collectionId } = useParams();
   const collection = useSelector(selectCollection(collectionId))
   return (
      <div className='collection-page'>
         {collection ?
            <div>
               <h2 className="title"> {collection.title}</h2 >
               <div className='collection-page-items'>
                  {
                     collection.items.map(item => <CollectionItem key={item.id} item={item} />)
                  }
               </div>
            </div> :
            null
         }
      </div>
   )
}

export default withSpinner(CollectionPage)