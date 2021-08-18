import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './styles/index.css'
import './styles/app.css'

import Routes from './constants/routes'

import HomePage from './pages/home'

export default function App() {
  const contextClass = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    default: 'bg-orange',
    warning: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={Routes.home}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer
        toastClassName={props =>
          contextClass[props?.type ?? 'default'] +
          ' flex px-3 py-2 min-h-10 text-lg rounded-lg justify-between overflow-hidden cursor-pointer'
        }
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
