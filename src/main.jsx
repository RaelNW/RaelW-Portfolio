import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Project from './pages/Project.jsx'
//import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Error from './pages/Error.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'

const routes =createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <AboutMe />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '*',
        element: <Error />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);