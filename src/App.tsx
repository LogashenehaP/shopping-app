import Header from './components/common/NavigationBar/Header';
import { Search } from './components/common/SearchBar/Search';
import { FeaturedItems } from './components/dashBoard/FeaturedProducts/FeaturedItems';


function App() {
  return (
    <div>
      <Header />
      <FeaturedItems />
      <Search />
    </div>
  );
}

export default App;
