import { Fragment,Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

//assume that this data is fetched from a server
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];


class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };      
    }

  searchChangeHandler(event){
    this.setState({
      searchTerm: event.target.value,
    });
  }

  componentDidMount(){
    //fetch users from a server
    this.setState({
      filteredUsers: DUMMY_USERS,
    });
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.searchTerm !== this.state.searchTerm){
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
      });
    }
  }

  render(){
    return (
      <Fragment>
      <div className={classes.finder}> 
        <input type='search' onChange={this.searchChangeHandler.bind(this)} />
      </div>
      <Users users={this.state.filteredUsers} />
    </Fragment>
    )
  }
}




export default UserFinder;
