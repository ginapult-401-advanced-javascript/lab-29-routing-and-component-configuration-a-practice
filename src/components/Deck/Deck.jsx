import React from "react";
import Card from "../Card/Card.jsx";
import { If } from "../If/index.js";

const Deck = props => {
  const deck = props.deck || [];
  console.log(If);

  return (
    <>
      <section className="deck">
        <If condition={deck.title !== null}>
          <header>
            <h2>{deck.title}</h2>
          </header>
          {deck.records.map(card => (
            <Card card={card} />
          ))}
        </If>
      </section>
    </>
  );
};

export default Deck;
