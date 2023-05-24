import { useState } from 'react';
import { AddCategory , GifGrid } from './components';



const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Dragon ballk                                ']);
  const onAddCategory = (newCategory) =>{

    if( categories.includes(newCategory )) return;


    setCategories(  [newCategory,...categories]  );
    //Segunda forma setCategories(cat => [...cat,'FIFA']);
  }
  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory 
      onNewCategory = { (event)  => onAddCategory(event)}
      
      />
      {
        categories.map( category => (
          <GifGrid key={category}
                  category={category} />
            ))
      }


    </>
  )
}

export default GifExpertApp


