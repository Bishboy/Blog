import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import Blog from "./page/Blog.jsx";
import About from "./page/About.jsx";
import Services from "./page/Services.jsx";
import Contact from "./page/Contact.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SingleBlog from "./component/SingleBlog.jsx";
 

const URL = `https://blogbackend-l8un.onrender.com/blogs`;
// const URL = `${import.meta.env.VITE_API_URL}/blogs`
 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
        loader: ({ params }) => fetch(`${URL}/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </StrictMode>
);
