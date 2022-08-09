import React from 'react';

const Quotes = () => (
  <main>
    <div className="container p-5">
      <p className="quotes pt-0 p-4 animate__animated animate__fadeInDownBig">
        Without mathematics, there’s nothing you can do. Everything around you
        is mathematics. Everything around you is numbers.
        <br />
        <span className="fw-bold">
          — Shakuntala Devi, Indian writer and mental calculator
        </span>
      </p>
      <p className="quotes pt-0 p-4 animate__animated animate__fadeInRight">
        Mathematics as an expression of the human mind reflects the active will,
        the contemplative reason, and the desire for aesthetic perfection. Its
        basic elements are logic and intuition, analysis and construction,
        generality and individuality.
        <br />
        <span className="fw-bold">
          {' '}
          — Richard Courant, German-American mathematician
        </span>
      </p>
      <p className="quotes pt-0 p-4 animate__animated animate__fadeInUpBig">
        Mathematics are the result of mysterious powers which no one
        understands, and which the unconscious recognition of beauty must play
        an important part. Out of an infinity of designs a mathematician chooses
        one pattern for beauty’s sake and pulls it down to earth.
        <br />
        <span className="fw-bold"> —Marston Morse, American mathematician</span>
      </p>
    </div>
  </main>
);

export default Quotes;
