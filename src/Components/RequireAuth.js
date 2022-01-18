import { User } from "parse";
import { Navigate, Outlet } from "react-router";

// based on: https://stackoverflow.com/a/69592617/1200070

export default function RequireAuth() {
  if (!User.current()) {
    // Redirect to the /login page,
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}