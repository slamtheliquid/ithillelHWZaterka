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

const App = () => {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header></Header>
      <Content>
          <ErrorBoundary>
            <Routes>
              <Route path='/' element={<Shows><h1>Characters page</h1></Shows>} />
              <Route path='/:id' element={<Show />} />
              <Route path='/:id/episodes' element={<Episodes />} />
              <Route path='/:id/seasons' element={<Seasons />} />
              <Route path='/:id/cast' element={<Cast />} />
              <Route path='/:id/crew' element={<Crew />} />
              <Route path='/:id/characters' element={<Characters />} />
              <Route path='/:id/gallery' element={<Gallery />} />
              <Route path='/search' element={<Search />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
      </Content>
    </Layout>
  );
}

export default App;