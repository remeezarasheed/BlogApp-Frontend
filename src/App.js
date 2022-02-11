import './App.css';
import {BrowserRouter as Router ,Routes, Route,Link} from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import Error from  './components/error/Error';
import Article from './components/article/Article';
import ArticleList from './components/article/ArticleList';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';


function App() {
  return (
    <Router>
      <>
      <Header></Header>
        <Routes>  
          <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />  
          <Route  path='/article-list' element={<ArticleList />} />
          <Route  path='/article/:name' element={ <Article /> } />
          <Route  path='/login' element={<Login />} />  
          <Route  path='/signup' element={<Signup />} />  
          <Route  path='*' element={<Error />} />
          
        </Routes>
      </>
    </Router>
    
      
  );
}

export default App;
