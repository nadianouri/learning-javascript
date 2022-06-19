import logo from './logo.svg';
import './App.css';

function App() {
  // primitive data types: 
  let myVar1 = "test "; // type is string
  console.log(typeof myVar1);
  let myVar2 = "12"; // type is string
  console.log(typeof myVar2);
  let myVar3 = 12; // type is number
  console.log(typeof myVar3);


  let myVar4 = 12.34; // type is number
  console.log(typeof myVar4);
  let myVar5 = 0; // type is number
  console.log(typeof myVar5);
  let myVar6 = true; // type is boolean
  console.log(typeof myVar6);
  let myVar7 = "false"; // type is string
  console.log(typeof myVar7);
  let myVar8 = "true"; // type is string
  console.log(typeof myVar8);
  let myVar9 = false; // type is boolean
  console.log(typeof myVar9);
  let myVar10; // type is undefined
  console.log(typeof myVar10);
  let myVar11 = null; // type is null
  console.log(typeof myVar11);
  let myVar12 = undefined; // type is undefined
  console.log(typeof myVar12);
  // concatination between 2 vars: 
  console.log(myVar1+myVar2);

  // assignment

  let firstText = "My name is ";
  let firstName = "Nadia " ;
  let lastName = "Nouri";
  let secondText = " I'm " ;
  let age = 32 ;
  console.log(firstText + firstName + lastName + secondText + age); // console.log(myvar1+myvar2)
 
  // let can change value 
  let nadiaAge = 18;
  console.log(nadiaAge);
  nadiaAge = 19;
  console.log(nadiaAge);

  // const  can not change the value
  const birthDay = "19900916";
  console.log(birthDay);
  // birthDay = "20180512"; ==> will throw an error on console :  Uncaught TypeError: Assignment to constant variable.. 













  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
