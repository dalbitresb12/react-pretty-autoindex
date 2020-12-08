import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumb';
import FileList from './components/FileList';
import { get } from 'lodash';
import defaultConfig from './defaultConfig';

const App = () => {
  const basePath = get(globalThis, "config.basePath", defaultConfig.basePath);

  return (
    <Router basename={basePath}>
      <div className="my-4 mx-4 lg:max-w-4xl lg:mx-auto">
        <Breadcrumb className="my-4" />
        <FileList />
      </div>
    </Router>
  );
};

export default App;
