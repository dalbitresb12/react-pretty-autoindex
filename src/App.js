import { BrowserRouter as Router } from 'react-router-dom';
import { getConfigKey } from './utils';
import Breadcrumb from './components/Breadcrumb';
import FileList from './components/FileList';

const App = () => {
  const basePath = getConfigKey("basePath");

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
