import { useRoutes } from "react-router-dom"
import Landing from "../pages/Landing"
import Contact from "../pages/Contact"
import Experiments from "../pages/Experiments"
import DomainExpansion from "../pages/DomainExpansion"
import LeadsForge from "../pages/LeadsForge";

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
    {
      path: "leads-forge",
      element: <LeadsForge />
    },
    
  ])
}

export default Router
