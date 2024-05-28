import { useRoutes } from "react-router-dom"
import Landing from "../pages/Landing"
import Contact from "../pages/Contact"
import Experiments from "../pages/Experiments"

import DomainExpansion from "../pages/DomainExpansion"

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
    {
      path: "domain-expansion",
      element: <DomainExpansion />
    },
    
  ])
}

export default Router
