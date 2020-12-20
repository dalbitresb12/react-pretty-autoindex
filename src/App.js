import { BrowserRouter as Router } from 'react-router-dom';
import { getConfigKey } from './utils';
import Breadcrumb from './components/Breadcrumb';
import FileList from './components/FileList';
import Footer from './components/Footer';

const App = () => {
  const basePath = getConfigKey("basePath");

  return (
    <Router basename={basePath}>
      <div className="relative min-h-full lg:max-w-5xl lg:mx-auto text-xs lg:text-sm">
        <div className="pb-20">
          <Breadcrumb className="py-4" />
          <FileList />
        </div>
        <Footer className="absolute bottom-0 w-full h-20" />
      </div>
    </Router>
  );
};

export default App;
