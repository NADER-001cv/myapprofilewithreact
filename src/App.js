
import './App.css';
import imageone from './images/photo1.jfif';
import  Navbar  from './component/Navbar/Navbar.js';
import  Header from    './component/Header/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Header/>
      <form className="blockform">

      <div className="formimg">
      <img  src={imageone}/>
 
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </header>
    </div>
  );
}

export default App;
