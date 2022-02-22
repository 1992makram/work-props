import logo from './logo.svg';
import './App.css';
import Component from './Profile/Component';
import image from './img2.jpg';



function App() {
  const Fullname='mak';
  const Bio='biologie';
  const Profession='pro';
  const handleName=(name)=>{
    alert(name)
  }
  return (
    <div className="App">
      <Component Fullname={Fullname} Bio={Bio} Profession={Profession} handleName={handleName}>
        <img src={image}/>
 </Component>
      
    </div>
  );
}

export default App;
