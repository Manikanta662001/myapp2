import React ,{ useState } from 'react';
import './App.css';
import Home,{name,age} from './Home'
import Navbar from './components/Navbar';
import Condition,{Car,Garage,Football,Name} from './components/Condition';
import Goal,{Elements} from './components/Goal';
import Names from './components/Mapping';
import Hooks from './components/Hooks';
import Table from './components/Table';
import Table2 from './components/Table2';
import Fetching from './components/Fetching';
import ClassCompo, { Counter } from './components/ClassCompo';
import useFetch from './components/useFetch';
import Classes,{Cars,Garages,Humans,Displaying} from './components/Classes'
import ArrMethods from './components/ArrMethods';
import FunctionalComponents from './components/FunctionalComponents';
import Homework from './components/Homework';
import Homework2 from './components/Homework2';
import Homework_ from './components/Homework_';


import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Common from './Pages/Common';


// import Counter from './features/counter/Counter';
import Muilibrary from './components/Muilibrary';

const url='https://jsonplaceholder.typicode.com/users'
function App() {
  const arra=['A1','B1','C1','D1']
  
// eslint-disable-next-line
let [a1,b1,c1,d1]=arra

  const [data] = useFetch(url);
  console.log(data,'2424')


  

  let arr1=[1,2,3,4,10]
  let arr2=[5,6,7,8]
  let arr3=[...arr1,...arr2]
  console.log(arr3,'99')
  return (
    <div className="App">
      {/* <Muilibrary/> */}
      {/* <Counter/> */}
    {/* <ClassCompo age={33}/>
      
    <Counter/>

      <Home />
      {
        <div>
          <h2>{name}</h2>
          <p>{age}</p>
        </div>
      }
      <Navbar />
      
      {
        arra.map((item)=>{
          return <h1>{item}</h1>

        })  
      }
      {
        <h2>{arra[2]}</h2>
        
      }
      {
        <h2>{d1}</h2>
      }
      
      

      <Condition />
      <Car color='red'/>

      <Garage />
      <Football />
      <Goal isgoal={false}/>

      <Elements list={arr1} />

      <Name age={22}/>
      <Names />

      <Hooks /> 
      
      <Table />
      <Table2 />
      <Fetching />
 
      <Classes/>
      <Cars hp='1000hp'/>
      <Garages/>
      <Humans city='HYB'/>




<Displaying/>
<ArrMethods/>
<FunctionalComponents defined='true'/>

<Homework/>
<Homework2/>


<Homework_/> */}

{/* <BrowserRouter>

<Routes>
  <Route path='/' element={<Home />}>
  <Route path='about' element={<About />}/>
  <Route path='contact' element={<Contact />}>
    <Route path='common' element={<Common />}/>
  </Route>
  <Route path='footer' element={<Footer />}/>

  </Route>
  
</Routes>
</BrowserRouter> */}


      
    </div>
  );
}


export default App;



