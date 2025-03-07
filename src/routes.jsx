import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AppLayout } from "./components";
import {

  Videos,
  RegisterPage,
  Home,
  ManageVideos,
  ManageUser,
} from "./pages";
import RedefinePassword from "./pages/RedefinePassword/RedefinePassword";
import useAuthStore from "./stores/auth";
import VideoPage from "./pages/VideoPage/VideoPage";

function PrivateRoutes() {
  const auth = useAuthStore((state) => state?.auth);

  if (auth) return <Outlet />;

  return <Navigate to="/register" replace />;
}
function PrivateAdminRoutes() {
  const auth = useAuthStore((state) => state?.auth?.user?.type);
  const { pathname: from } = useLocation();

  if (auth === "admin") {
    return <Outlet />;
  }

  return <Navigate to="/" state={{ from }} replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
    <Route element={<PrivateRoutes />}>
      <Route index element={<Home />} />
      <Route path="video" element={<Videos />} />
      <Route path="videos/:name" element={<VideoPage />} />
      {/* <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="sobre-nos" element={<AboutUs />} /> */}
    </Route>
    <Route path="register" element={<RegisterPage />} />
    <Route path="redefine-password/:token" element={<RedefinePassword />} />
    <Route path="manage-videos" element={<ManageVideos />} />
    <Route element={<PrivateAdminRoutes />}>
      <Route path="manage-users" element={<ManageUser />} />
      
    </Route>
  </Route>
  ),
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
