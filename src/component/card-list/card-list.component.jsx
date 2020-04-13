//fsc
import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';


export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(item => (
      <Card key={item.id} monster={item}> </Card>
    ))
    }
  </div>
);
