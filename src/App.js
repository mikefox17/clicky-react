import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import card from "./card.json";

//Setting the state and bringing in the card.json
class App extends Component {
  state = {
    card,
    score: 0,
    highscore: 0
  };
  //Named after the upcoming Avengers movie...jk...
  //if user score is greater than high score then set the state highscore to the new highscore
  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.card.forEach(card => {
      card.count = 0;
    });
    alert(`You done clicked twice :(\nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };
  //Passing through the ID from each image in the card.json
  clickCount = id => {
    //setting paramaters props and id to any based off the Card.js
    this.state.card.find((o, i) => {
      if (o.id === id) {
        //if clicked on in Card.js incriment the click counter by one and set the state of the score to incriment also
        if (card[i].count === 0) {
          card[i].count = card[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          //shuffling of the cards, sorting through them then using math.random to shuffle
          this.state.card.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
        }
      }
    });
  };

  render() {
    return (
      <div>
        {/* Where the score and highscore are displayed */}
        <Header score={this.state.score} highscore={this.state.highscore}>
          Clicky Game
        </Header>
        <div className="row">
          {/* Mapping out the card.json here */}
          {this.state.card.map(card => (
            <Card
              //Setting the clickCounter, the ID from json, and image source from JSON
              clickCount={this.clickCount}
              id={card.id}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
