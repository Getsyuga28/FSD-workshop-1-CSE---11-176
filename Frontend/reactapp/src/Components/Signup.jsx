// const Signup = () => {
//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

import { useState } from "react";

const Signup = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: Number(age),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage(data.message);

        setName("");
        setAge("");

        if (onUserAdded) {
          onUserAdded();
        }
      } else {
        setStatusMessage(data.message || "Failed to create user.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Server error. Check your backend.");
    }
  };

  return (
    <div style={styles.card}>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Name:</label>

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Age:</label>

          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Create User
        </button>
      </form>

      {statusMessage && (
        <p style={styles.message}>{statusMessage}</p>
      )}
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    fontFamily: "sans-serif",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  message: {
    marginTop: "12px",
    fontSize: "14px",
    color: "#16a34a",
  },
};

export default Signup;