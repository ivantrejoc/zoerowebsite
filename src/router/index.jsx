import { useRoutes } from "react-router-dom"
import Landing from "../pages/Landing"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import WalletSelect from "../pages/WalletSelect"
import UserMenu from "../pages/UserMenu"



function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/wallets",
      element: <WalletSelect />
    },
    {
      path: "/menu",
      element: <UserMenu />
    },

  ])
}

export default Router
