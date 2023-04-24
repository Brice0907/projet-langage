import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './root/root'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
