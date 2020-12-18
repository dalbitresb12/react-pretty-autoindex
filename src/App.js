import { BrowserRouter as Router } from 'react-router-dom';
import { get } from 'lodash';
import Breadcrumb from './components/Breadcrumb';
import FileList from './components/FileList';
import defaultConfig from './defaultConfig';

const App = () => {
  const basePath = get(globalThis, "config.basePath", defaultConfig.basePath);

  return (
    <Router basename={basePath}>
      <div className="my-4 mx-4 lg:max-w-5xl lg:mx-auto text-xs lg:text-sm">
        <Breadcrumb className="my-4" />
        <FileList />
      </div>
    </Router>
  );
};

export default App;
