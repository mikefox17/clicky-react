import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import card from "./card.json";

class App extends Component {
  state = {
    card,
    score: 0,
    highscore: 0
  };

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

  clickCount = id => {
    this.state.card.find((o, i) => {
      if (o.id === id) {
        if (card[i].count === 0) {
          card[i].count = card[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
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
        <Header score={this.state.score} highscore={this.state.highscore}>
          Clicky Game
        </Header>
        <div className="row">
          {this.state.card.map(card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
