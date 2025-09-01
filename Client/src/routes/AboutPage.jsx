import React from 'react';

function AboutPage() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-8 mb-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Om Mig</h1>
      <p className="mb-6">
        Velkommen til min portefolie side til 4. semester på datamatiker studiet.
      </p>
      <h2 className="text-2xl font-semibold mb-2 mt-6">Min Mission</h2>
      <p className="mb-6">
        Jeg vil lave 2 ugers læringsplan af gangen, og lave opslag mindst et opslag i ugen
        inden for hver valgfag
      </p>
      <h2 className="text-2xl font-semibold mb-2 mt-6">Kontakt</h2>
      <p>
        Spørgsmål eller feedback? skriv til min mail:{' '}
        <a href="mailto:modj62361@edu.ucl.dk" className="text-yellow-700 underline">
          modj62361@edu.ucl.dk
        </a>
        .
      </p>
    </div>
  );
}

export default AboutPage;
