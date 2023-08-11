import {BrowserRouter, Route, Routes} from 'react-router-dom';

import PostPage from './pages/Post';
import PostsPage from './pages/Posts';
import Navbar from './components/Navbar';
export default function App() {


  return ( 
    <Navbar>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>

      </Routes> 
    </BrowserRouter>
    </Navbar>
  );
}

// export default App
 