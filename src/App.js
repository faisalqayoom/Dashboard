import './App.scss';
import "./components/colors/Colors.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import Router from './components/Routes/Router';


function App() {
  return (
    <>

      <div className='container-fluid p-0'>
        <Router />
      </div>

    </>
  );
}

export default App;
