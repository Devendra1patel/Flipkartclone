import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 55 }} >
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<DetailView/>} />
          </Routes>
        </Box>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
