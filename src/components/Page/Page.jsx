import React from 'react';
import Deck from '../Deck/Deck.jsx';

const Page = (props) => {

  const content = props.content || [];

  return (
    <>
      {content.map( (deck,i) => (
        <Deck deck={deck}/>
      ))}
    </>
  );
};

export default Page;
