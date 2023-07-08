import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { CommandPalette } from "./CommandPalette";
import { SearchContent } from "./Search";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Playground } from "./pages/Playground";

const searchContent: SearchContent[] = [
  {
    text: 'Home',
    id: '1'
  },
  {
    text: 'About',
    id: '2'
  },
  {
    text: 'Playground',
    id: '3'
  },
];

const CommandPaletteAppRoot = () => {
  return (<>
    <Outlet />
    <CommandPalette content={searchContent} /> 
  </>)
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommandPaletteAppRoot />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        index: true,
        element: <Navigate to="home" />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "playground",
        element: <Playground />
      }
    ]
  },
]);

export const CommandPaletteApp = () => {
  return (<>
    <RouterProvider router={router} />
  </>);
}
