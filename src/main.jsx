import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/signup.jsx'
import Dashboard from './pages/dashboard.jsx'
import Login from './pages/login.jsx'
import {AuthLayout} from './components/index.jsx'
import Cartpage from './pages/cartpage.jsx'
import YourOrderPage from './pages/YourOrderPage.jsx'
import InvoicePage from './pages/invoicePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: (<AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
        )
      },
      {
        path: "/login",
        element: (<AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
        )
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication>
            <Dashboard />
          </AuthLayout>
        )
      },
      {
        path: "/cartpage",
        element: (
          <AuthLayout authentication>
            <Cartpage />
          </AuthLayout>
        )
      },
      {
        path: "/yourorder",
        element: (
          <AuthLayout authentication>
            <YourOrderPage />
          </AuthLayout>
        )
      },
      {
        path: "/invoice",
        element: (
          <AuthLayout authentication>
            <InvoicePage />
          </AuthLayout>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
