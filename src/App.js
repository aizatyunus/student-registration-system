import './App.css';
import ToolBar from './component/ToolBar/ToolBar';
import SideBar from './component/SideBar/SideBar';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Payment from './pages/Payment';
import { Switch , Route, BrowserRouter as Router } from 'react-router-dom';
import 'primereact/resources/themes/lara-dark-purple/theme.css';

function App() {
  return (
    <Router>
      <div>
        <ToolBar />
      </div>
      <div className='wrapper'>
          <div className = "left-side">
            <SideBar />
           </div>
          <div className = 'right-side'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/CourseList" component={CourseList} />
              <Route path="/Payment" component={Payment} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;