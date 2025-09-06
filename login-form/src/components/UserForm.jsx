import { useDispatch, useSelector } from "react-redux";
import { addUser, updateEmail, updateName } from "../features/user/UserSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const { name, email, status } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch addUser action
    dispatch(addUser({ name, email }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
      </div>
      <br />
   
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
      </div>
      <br />
 
      <button type="submit">Login</button>

      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && <p>Login successful!</p>}
      {status === "failed" && <p>Error occurred. Please try again.</p>}
    </form>
  );
};

export default UserForm;
