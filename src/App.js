import { Provider } from 'react-redux';
import './App.scss';
import Routing from './AppRouting';
import Alert from './shared/ui/alert/Alert';
import rootStore from './redux/stores/rootStore';

function App() {
  return (
      <>
        <Provider store={rootStore}>
          <Alert/>
          <Routing/>
        </Provider>
      </>
  );
}

export default App;
