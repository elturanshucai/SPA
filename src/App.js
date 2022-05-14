import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
function Home(){
  return(
    <div>Home</div>
  )
}
function About(){
  return (
    <div className='about'>
      <h2>About</h2>
      <p>
        Lionel Messi is a soccer player with Paris Saint-Germain and the Argentina national team. He has established records for goals scored and won individual awards en route to worldwide recognition as one of the best players in soccer.
      </p>
    </div>
  )
}
function ExamplesOfWork(){
  return(
    <ul className='example'>
      <li>Iconic goal vs Real Madrid.(90+3') </li>
      <li>Absolutely goal vs Bayern Munich</li>
      <li>Wonderful free kick goal vs Liverpul</li>
    </ul>
  )
}
function Contacts(){
  return (
    <div className='contacts'>
      <p>Instagram: <a href='https://www.instagram.com/leomessi/'>Lionel Messi</a></p>
    </div>
  )
}
function Nav(){
  return(
    <header>
     <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='/examples'>Example</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path='/examples' element={<ExamplesOfWork/>}/>
        <Route path='/contact' element={<Contacts/>}/>
      </Routes> 
    </header>
  )
}

function App() {
  return (
    <BrowserRouter> 
      <Nav />
    </BrowserRouter>
  );
}

export default App;
