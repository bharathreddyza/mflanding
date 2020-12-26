import logo from './logo.svg';
import './App.css';
import ComingSoon from 'react-coming-soon'
import {Link} from 'react-router-dom'
function App() {
  return (
    <div  style={{alignItems:"center",justifyContent:"center",}} className="App item">
    <div className="item">
    <img style={{maxWidth:"500px"}} src="https://react-coming-soon.maksv.me/planning.svg" className="App item"/>
      <h1 style={{textColor:"#212121"}} className="App item text-lg	">under devolopment</h1>
         <a className="btn-1" href="http://manyfist.webflow.io">what are we upto?</a> 
    </div>
    
 
    </div>
  );
}

export default App;
