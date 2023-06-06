import { Provider } from 'react-redux'
import Store from './redux/store'

import App from './App';


const Index = () => {
  return (
    <Provider store={Store}>
        <App/>
    </Provider>
  )
}

export default Index