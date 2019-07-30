import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json.js";
import "./App.css";
let array = []

class App extends React.Component {
  state = {
    friends,
    array,
    count: 0
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  delete = (id) => {
    let array = this.state.array
    if (array.indexOf(id) === -1) {
      array.push(id)
      this.setState({ count: this.state.count + 1 })
    }
    else {
      array = []
      this.setState({ count: this.state.count = 0 })
    }
    let newFriends = this.shuffle(friends)
    this.setState({ newFriends:friends, array })
  }


  render() {
    return (
      <Wrapper>
        {console.log(this.state.array)}
        <h1 className="title">Friends List {this.state.count}</h1>
        {this.state.friends.map(friend => (
          <FriendCard
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            id={friend.id}
            key={friend.id}
            delete={this.delete}
          />
        ))};


      </Wrapper>
    );
  }
}

export default App;
