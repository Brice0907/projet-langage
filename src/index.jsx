import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './root/root'
import Home from './pages/home/home';
import User from './pages/user/user'
import Documentation from './pages/documentation/documentation';
import Main from './pages/main/main'
import Error from './pages/error/error';
import Question from './pages/question/question';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/main',
        element: <Main />
      },
      {
        path: '/main/:id',
        element: <Question />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/documentation',
        element: <Documentation />
      },
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
