import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PostPage from './pages/Post';
import PostsPage from './pages/Posts';
export default function App() {


  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>

      </Routes> 
    </BrowserRouter>
  );
}

// export default App
 