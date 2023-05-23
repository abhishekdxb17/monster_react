import {Component} from 'react';

import  './card.component';
import './card.css'

class CardView extends Component{

    render(){
const { id,name,email} = this.props.monster;  //destructure id, name , email
        return(
            <div className="card-container" key={id}>
            <img
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}?set=set&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )
    }
}
export default CardView;