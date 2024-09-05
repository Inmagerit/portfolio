
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListOfClients from './components/Clients.page';
import ListOfPosts from './components/Posts.page';
import BooksCatalog from './components/Books.page';
import HomePage from './components/Home.page';
import Header from './components/Header.component';

function App() {
  return (
    <>
    <h1>Main app</h1><Router>
     <Header/>

      <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/clients" element={<ListOfClients />} />
    <Route path="/catalog" element={<BooksCatalog />} />
    <Route path="/posts" element={<ListOfPosts />} />
</Routes>
    </Router>
    </>
    
  );
}

export default App;
