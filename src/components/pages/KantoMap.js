import React from 'react';

const KantoMap = () => {
  return (
    <div>
      <h2 className="ui header">Kanto
        <div className="sub header">
          Trainer fly map
        </div>
      </h2>
      <div className="img-zoom-container">
        <img id="image-map" className="full-width" alt="Kanto-map" src="./kanto.png" />
      </div>
    </div>
  );
};

export default KantoMap;