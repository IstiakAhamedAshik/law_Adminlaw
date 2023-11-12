import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Question from './Pages/Question'
import SignIn from './Auth/SignIn'

import { Advocate } from './Pages/Advocate'

import Appointment from './Pages/Appointment'
import { ClientComment } from './Pages/ClientComment'
import AddminPage from './Pages/AddminPage'
import Services from './Pages/Services'
import CaseHistory from './Pages/CaseHistory'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/home',
    element: <Main />,
    children: [
      { path: '/home', element: <Question /> },
      { path: '/home/advocate', element: <Advocate /> },
      { path: '/home/client_appointment', element: <Appointment /> },
      { path: '/home/client_comment', element: <ClientComment /> },
      { path: '/home/admin_user', element: <AddminPage /> },
      { path: '/home/servicess', element: <Services /> },
      { path: '/home/history', element: <CaseHistory /> },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
