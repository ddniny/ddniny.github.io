import React from 'react';
import { Link } from "react-router";
// import {Link} from 'react-router';
// import NavbarStore from '../stores/NavbarStore';
// import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // NavbarStore.listen(this.onChange);
    // NavbarActions.getCharacterCount();

    // let socket = io.connect();

    // socket.on('onlineUsers', (data) => {
    //   NavbarActions.updateOnlineUsers(data);
    // });

    // $(document).ajaxStart(() => {
    //   NavbarActions.updateAjaxAnimation('fadeIn');
    // });

    // $(document).ajaxComplete(() => {
    //   setTimeout(() => {
    //     NavbarActions.updateAjaxAnimation('fadeOut');
    //   }, 750);
    // });
  }

  componentWillUnmount() {
    // NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

//   handleSubmit(event) {
//     event.preventDefault();

//     let searchQuery = this.state.searchQuery.trim();

//     if (searchQuery) {
//       NavbarActions.findCharacter({
//         searchQuery: searchQuery,
//         searchForm: this.refs.searchForm,
//         history: this.props.history
//       });
//     }
//   }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Brand</Link>
          </div>

          <div className="collapse navbar-collapse" >
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to="work">Home</Link></li>
              <li><Link to="work">Work</Link></li>
              <li><Link to="life">Life</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;