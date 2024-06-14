import type { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Protect = ({ children }: PropsWithChildren) => {
	const isAuth = useUser((s) => s.isAuth);

	if (!isAuth) return <Navigate to="/signin" />;

	return children ? children : <Outlet />;
};

export default Protect;
