import Title from './Title';
import logo from './logo.svg';
import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <Title />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// // array untuk menyimpan data
// const phoneData = [
//   { name: "iPhone X", price: 10000000, discount: 50 },
//   { name: "Oppo Find X", price: 14000000, discount: 30 },
//   { name: "Redmi Note X", price: 5000000, discount: 42 },
// ];

// // membuat komponen dengan props name,price, dan discount
// function Product({ name, price, discount = 0}) {
//   return (
//       <div>
//           <h2>{name}</h2>
//           <p>
//               <s>Rp {price}</s> ({discount}%)              
//           </p>
//           <p>
//               <b>Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}</b>
//           </p>
//           <hr />
//       </div>
//   );
// }


// // menggunakan component di dalam App()

// // function App(){
// //   return (
// //       <div>
// //           <Product name="iPhone X" price="10000000" discount="50" />
// //           <Product name="Oppo Find X" price="140000000" discount="30" />
// //           <Product name="Redmi Note X" price="12000000" discount="42" />
// //       </div>
// //   );
// // }

// // export default App;


// // menggunakan component di dalam App()
// function App() {
//   return (
//     <div>
//       {phoneData.map((phone, id) => (
//         <Product
//           key={id}
//           name={phone.name}
//           price={phone.price}
//           discount={phone.discount}
//         ></Product>
//       ))}
//     </div>
//   );
// }

// export default App;


// array untuk menyimpan data
// const phoneData = [
//   { name: "iPhone X", price: 10000000, discount: 50 },
//   { name: "Oppo Find X", price: 14000000, discount: 30 },
//   { name: "Redmi Note X", price: 5000000, discount: 42 },
//   { name: "Vivo XYZ", price: 10000000, discount: 0 },
// ];

// // membuat komponen dengan props name, price, dan discount
// function Product({ name, price, discount = 0 }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       {discount > 0 && <p><s>Rp {price}</s> ({discount}%)</p>}
//       <p>
//         <b>
//           Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
//         </b>
//       </p>
//       <hr />
//     </div>
//   );
// }

// // menggunakan component di dalam App()
// function App() {
//   return (
//     <div>
//       {phoneData.map((phone, id) => (
//         <Product
//           key={id}
//           name={phone.name}
//           price={phone.price}
//           discount={phone.discount}
//         ></Product>
//       ))}
//     </div>
//   );
// }

// export default App;


//Nested Elemnts in JSX
// import React, { Component } from 'react';
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <h1>Hallo Nested</h1>
//         <h2>Belajar Element </h2>
//         <p>Nested Element Pada JSX</p>  
//       </div>
//     );
//   }
// }
// export default App;

// JSX Attributes
import React, { Component } from 'react';
class App extends Component{
  render(){
    return(
      <div>
        <h1 className="hai ana">{40+30}</h1>
      <h2>Belajar Attributes </h2>
      <p data-demoAttribute = "demo">JSX Attributes.</p>
      </div>
    );
  }
}
export default App;
