import e from 'express';
import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import PicItem from './components/PicItem';
import PicPost from './components/PicPost';
import pics from './data/pics';


function App() {
  const[selectedPic,setselectedPic] = useState(pics[null]);
  const[searchText,setSearchText] = useState('');

  function onPicOpenClick(pic) {
    setselectedPic(pic);
  }

  function onPicCloseClick() {
    setselectedPic(null);
  }

  const picItems = pics.filter((pic)=>{
    return pic.title.includes(searchText);
  }).map((pic,index) => {
    return <PicItem key={index} pic={pic} onPicClick={onPicOpenClick} />;
  });

  let picPost = null;
  if(!!selectedPic){
    picPost = <PicPost pic={setselectedPic} onBgClick={onPicCloseClick}/*ถ้าแบ็กกราวโดนคลิก*/ />;
  }

  return (
    <div className="app">
       <AppHeader />
       <section className="app-section">
         <div className="app-container">
         <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">
            
            {picItems}
            
          </div>
         </div>
       </section>
        {picPost}
    </div>
  );
}

export default App;
