import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";

// import Grocery from "./component/Grocery";

//Chunking | Code-Splitting | Dynamic Bundling | Lazy Loading | On-demand Loading:

const Grocery= lazy(()=>
    import("./component/Grocery")
);

//The Outlet here gets replaced by the component based on the path in appRouter
const AppLayout= () => {
    return (
        <div className= "app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
};

// This configuration is a list (Array of objects)
//Each and every object defines a diferrent path and what should happen on that path

// I want to push these children into the AppLayout List
const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading..</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
    },
])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);