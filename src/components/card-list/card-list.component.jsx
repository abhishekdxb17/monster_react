import { Component } from "react";
import "./card-list.css";
import CardView from "../card/card.component";
class CardList extends Component {
  render() {
    const { monsters } = this.props; //this.props is the object which contains the Attributes which we have passed to the parent component.

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <CardView monster={monster} />);
        })}
      </div>
    );
  }
}

export default CardList;
