import { useRoutes } from "react-router-dom"
import Landing from "../pages/Landing"
import Contact from "../pages/Contact"




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
    
  ])
}

export default Router
