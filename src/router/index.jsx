import { useRoutes } from "react-router-dom"
import Landing from "../pages/Landing"
import Contact from "../pages/Contact"
import Experiments from "../pages/Experiments"



function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "experiments",
      element: <Experiments />
    },
    
  ])
}

export default Router
