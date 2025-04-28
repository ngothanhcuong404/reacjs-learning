import { FC, useContext } from "react";
import { UserContext } from "../../hooks/User/UserContext";
import { Link } from "react-router-dom";

const UsersPage: FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserProfile must be used within a UserProvider");
  }

  const { user, logout } = userContext;

  if (!user) {
    return (
      <div>
        <Link to="/login">login</Link>
      </div>
    );
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UsersPage;