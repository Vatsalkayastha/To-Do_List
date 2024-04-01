import { Provider } from 'react-redux'
import './App.css'
import store from "./redux/store"


function App() {

  return (
    <Provider store={store}>
      <div className='font-bold text-[32px]'>Hello Developer..</div>
    </Provider>
  )
}

export default App
