import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayouts></HomeLayouts>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                }
            ]
        },
        {
            path: "/about",
            element: <h2>Authentication layout</h2>
        },
        {
            path: "/career",
            element: <h2>News layout</h2>
        },
        {
            path: "/*",
            element: <h2>Error 404</h2>
        },
    ]);

    export default router;