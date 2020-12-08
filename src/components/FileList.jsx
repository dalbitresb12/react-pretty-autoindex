import { Link } from 'react-router-dom';

const FileList = () => {
  const previousLocation = location => {
    const pathname = location.pathname.split("/");
    pathname.pop();
    return pathname.join("/");
  };

  return (
    <div>
      <Link to={previousLocation}>..</Link><br />
      <Link to="/somepath">Some Path</Link><br />
      <Link to="/somepath2">Some Path 2</Link><br />
      <Link to="/nested/nested2">Nested 1</Link>
    </div>
  );
};

export default FileList;
