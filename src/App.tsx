import React from 'react';
import Header from './components/common/NavigationBar/Header';
import { Search } from './components/common/SearchBar/Search';
import { FeaturedItems } from './components/dashBoard/FeaturedItems';




function App() {
  return (

      <div>
     <Header/>
     <FeaturedItems/>
     <Search/>
      </div>
  );
}

export default App;
