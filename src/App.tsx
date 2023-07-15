import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

const LINKEDIN_URL = "https://www.linkedin.com/in/ruairi-dorrity-438919102/";
const GITHUB_URL = "https://github.com/RuairiD";

const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <MainPage />,
    },
    {
        path: "/linkedin",
        loader: () => redirect(LINKEDIN_URL),
    },
    {
        path: "/github",
        loader: () => redirect(GITHUB_URL),
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
