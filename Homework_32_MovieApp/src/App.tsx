import './App.less';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Shows from './pages/Shows';
import Show from './pages/Show';
import NotFound from './pages/NotFound';
import ErrorBoundary from 'components/ErrorBoundary';
import Episodes from "./pages/Episodes";
import Seasons from "./pages/Seasons";
import Cast from "./pages/Cast";
import Crew from "./pages/Crew";
import Characters from "./pages/Characters";
import Gallery from "./pages/Gallery";
import Search from "./pages/Search";
import People from "./pages/People";
import PeopleSearch from "./pages/PeopleSearch";
import Person from "./pages/Person";
import PersonShows from "./pages/PersonShows";

const App = () => {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header></Header>
      <Content>
          <ErrorBoundary>
            <Routes>
              <Route path='/' element={<Shows><h1>Shows</h1></Shows>} />
              <Route path='/:id' element={<Show />} />
              <Route path='/:id/episodes' element={<Episodes />} />
              <Route path='/:id/seasons' element={<Seasons />} />
              <Route path='/:id/cast' element={<Cast />} />
              <Route path='/:id/crew' element={<Crew />} />
              <Route path='/:id/characters' element={<Characters />} />
              <Route path='/:id/gallery' element={<Gallery />} />
              <Route path='/search' element={<Search />} />
              <Route path='/people' element={<People><h1>People</h1></People>} />
              <Route path='/people/search' element={<PeopleSearch />} />
              <Route path='/people/:id' element={<Person />} />
              <Route path='/people/:id/shows' element={<PersonShows />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
      </Content>
    </Layout>
  );
}

export default App;