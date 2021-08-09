import './App.css';
import './Dashboard';
import Dashboard from './Dashboard';
import './Rating';
import Rating from './Rating';
import './Reviews';
import Review from './Reviews';
import './Analysis'
import Analysis from './Analysis';
import './Visitors';
import Visitors from './Visitors';

function App() {
  return (
    <body>
      <section className="website">
        <section className="dashboard">
          <div>{Dashboard()}</div>
        </section>
        <section className="details">
          <div className="reviews">
            <div>{Review()}</div>
          </div>
          <div className="rating">
            <div>{Rating()}</div>
          </div>
          <div className="analysis">
            <div>{Analysis()}</div>
          </div>
          <section className="visitors">
            <div className="visitors-container">{Visitors()}</div>
          </section>
        </section>
      </section>
    </body>
  );
}

export default App;
