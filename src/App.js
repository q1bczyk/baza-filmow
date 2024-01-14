import { Provider } from 'react-redux';
import './App.scss';
import Routing from './AppRouting';
import Alert from './shared/ui/alert/Alert';
import alertStore from './redux/stores/alertStore';

function App() {
  return (
      <>
        <Provider store={alertStore}>
          <Alert/>
          <Routing/>
        </Provider>
      </>
  );
}

export default App;
