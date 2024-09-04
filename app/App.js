import 'react-native-gesture-handler';
import RootNav from './src/navigation/RootNav';
import { Provider } from 'react-redux';
import { store } from './src/app/store';


export default function App() {
  return (
    <Provider store={store}>
      <RootNav />
    </Provider>
  )
};