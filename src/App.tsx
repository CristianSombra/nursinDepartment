import { Suspense } from 'react'
import AppRouter from './routes/AppRouter'
import { SpinnerLoader } from './components';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {

  return (
    <Suspense fallback={<SpinnerLoader/>}>
      <AppRouter/>
    </Suspense>
  )
}

export default App
