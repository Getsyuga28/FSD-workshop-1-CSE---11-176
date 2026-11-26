import { useEffect, useState } from "react";
const User = () => {
  const [users, setUsers] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/user");
      const data = await response.json();
      if (response.ok) {
        setUsers(data.userData);
        setStatusMessage(data.message);
      } else {
        setStatusMessage("Failed to fetch users.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setStatusMessage(
        "Server error. Make sure the backend is running on port 3000.",
      );
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);
  return (
    <div style={styles.card}>
      {" "}
      <h2>User List</h2> <p style={styles.message}>{statusMessage}</p>{" "}
      {users.map((user) => (
        <div key={user.id} style={styles.user}>
          {" "}
          <p>
            {" "}
            <strong>ID:</strong> {user.id}{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>Name:</strong> {user.name}{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>Age:</strong> {user.age}{" "}
          </p>{" "}
        </div>
      ))}{" "}
      <button onClick={fetchUsers} style={styles.button}>
        {" "}
        Refresh Users{" "}
      </button>{" "}
    </div>
  );
};
const styles = {
  card: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    fontFamily: "sans-serif",
  },
  user: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  message: { color: "green" },
};
export default User;
