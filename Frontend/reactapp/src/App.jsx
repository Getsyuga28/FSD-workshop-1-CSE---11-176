// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(100)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Welcome to front end page</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
// import { useState } from "react";
// import "./index.css";

// function ApiTester() {
//   const [data, setData] = useState(null);
//   const [message, setMessage] = useState("");

//   // GET all users
//   const getData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/user");
//       const result = await response.json();

//       setData(result);
//       setMessage("Data fetched successfully");
//     } catch (error) {
//       console.error(error);
//       setMessage("Error fetching data");
//     }
//   };

//   // GET user by ID
//   const getUser = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/user/1");
//       const result = await response.json();

//       setData(result);
//       setMessage("User fetched successfully");
//     } catch (error) {
//       console.error(error);
//       setMessage("Error fetching user");
//     }
//   };

//   // POST
//   const postData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "Amogh",
//           phone: "9999999999",
//           email: "amogh@example.com",
//         }),
//       });

//       const result = await response.json();

//       setData(result);
//       setMessage("User created successfully");
//     } catch (error) {
//       console.error(error);
//       setMessage("Error creating user");
//     }
//   };

//   // PUT
//   const putData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/edit/1", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "Amogh Updated",
//           phone: "8888888888",
//           email: "amoghupdated@example.com",
//         }),
//       });

//       const result = await response.json();

//       setData(result);
//       setMessage("User updated successfully");
//     } catch (error) {
//       console.error(error);
//       setMessage("Error updating user");
//     }
//   };

//   // DELETE
//   const deleteData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/delete/1", {
//         method: "DELETE",
//       });

//       const result = await response.text();

//       setData(result);
//       setMessage("User deleted successfully");
//     } catch (error) {
//       console.error(error);
//       setMessage("Error deleting user");
//     }
//   };

//   return (
//     <div className="api-tester">
//       <h1>API Tester</h1>

//       <p>{message}</p>

//       <div className="buttons">
//         <button onClick={getData}>GET Data</button>
//         <button onClick={getUser}>GET User 1</button>
//         <button onClick={postData}>POST Data</button>
//         <button onClick={putData}>PUT Data</button>
//         <button onClick={deleteData}>DELETE Data</button>
//       </div>

//       <div className="data-display">
//         <h2>Response</h2>

//         <pre>
//           {data ? JSON.stringify(data, null, 2) : "No data yet"}
//         </pre>
//       </div>
//     </div>
//   );
// }

// export default ApiTester;


import { useState } from "react";
import Home from "./Components/home.jsx";
import Books from "./Components/books.jsx";
import Dashboard from "./Components/dashboard.jsx";
import ApiTester from "./Components/ApiTester.jsx";
import Signup from "./Components/Signup.jsx";
import User from "./Components/User.jsx";

const tabs = ["Home", "Books", "Dashboard", "Users", "API Tester"];

function App() {
  const [tab, setTab] = useState("Users");
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div>
      <h1>My User App</h1>

      <nav style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{ fontWeight: tab === t ? "bold" : "normal" }}
          >
            {t}
          </button>
        ))}
      </nav>

      {tab === "Home" && <Home />}
      {tab === "Books" && <Books />}
      {tab === "Dashboard" && <Dashboard />}
      {tab === "Users" && (
        <>
          <Signup onUserAdded={() => setRefreshKey((k) => k + 1)} />
          <User key={refreshKey} />
        </>
      )}
      {tab === "API Tester" && <ApiTester />}
    </div>
  );
}

export default App;
