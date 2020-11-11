import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import {setPizzas} from './redux/actions/pizzas';



// function App() {
//   // const [pizzas, setPizzas] = React.useState([]);

// //   React.useEffect(() => {
// //     axios.get('http://localhost:3000/db.json').then(({ data }) => {
// //       setPizzas(data.pizzas);
// //     });
// //   }, []);

// //   return (
// //     // <div className="wrapper">
// //     //   <Header />
// //     //   <div className="content">
// //     //     <Route path="/" render={() => <Home items={pizzas} />} exact />
// //     //     <Route path="/cart" component={Cart} exact />
// //     //   </div>
// //     // </div>
// //   );
// // }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // window.store.dispatch(setPizzas(data.pizzas));
    });
  }

  render() {
    return(
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={this.props.items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.pizzas.items,
  };
};

export default connect(mapStateToProps)(App);
