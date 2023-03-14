import { routes } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Card, Container } from '@mantine/core';

function App() {
  return (
    <Container>
      
    <BrowserRouter>
    <Routes>
      {routes.map((route) => <Route path={route.path} element={route.withCard ? <Card mt="xl" p="xl" withBorder style={{overflow:'visible'}}>{route.element}</Card> : route.element}/>)}
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
