// src/pages/LoginPage.tsx
import { useContext, useState } from "react";
import { UserContext } from "../../hooks/User/UserContext";
import { useNavigate } from "react-router-dom";

 const  LoginPage = () =>  {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext) {
    throw new Error("LoginPage must be used inside a UserProvider");
  }

  const { login } = userContext;

  // State lưu thông tin nhập
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 

   
    if (email && password) {
      login({
        id: Date.now(), 
        name: email.split('@')[0],
        email: email,
      });
      navigate("/"); 
    } else {
      alert("Vui lòng nhập đầy đủ email và mật khẩu!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Đăng nhập</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LoginPage;