import Layout from './components/layout/layout';
import { Route, Routes } from 'react-router-dom';
import { PublicHome } from '@staty/public/home';
import { PublicRoster } from '@staty/public/roster';
import { PublicFixtures } from '@staty/public/fitxtures';
import { PublicStats } from '@staty/public/stats';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'home'} element={<PublicHome />} />
        <Route path={'roster'} element={<PublicRoster />} />
        <Route path={'fixtures'} element={<PublicFixtures />} />
        <Route path={'stats'} element={<PublicStats />} />
      </Routes>
    </Layout>
  );
}

export default App;
