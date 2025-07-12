import { Navigate, Outlet } from "react-router-dom"

const RoleGaurd = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if(!token || !user) return <Navigate to="/login" replace />
  if(user.role !== role) return <Navigate to="/" replace />

  return <Outlet />;
}

export default RoleGaurd
