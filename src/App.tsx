import { routes } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mantine/core';

function App() {
  return (
    <Container>
    <BrowserRouter>
    <Routes>
      {routes.map((route) => <Route path={route.path} element={route.element}/>)}
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
