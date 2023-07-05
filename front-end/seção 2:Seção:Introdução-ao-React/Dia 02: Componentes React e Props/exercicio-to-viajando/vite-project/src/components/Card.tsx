import React from 'react';

type CityInfo = {
  city: string;
  country: string;
  imageUrl: string;
  visited?: boolean;
};

type CardProps = {
  cityInfo: CityInfo;
};

function Card({ cityInfo }: CardProps) {
  const { city, country, imageUrl, visited } = cityInfo;

  return (
    <div className="card">
      <img src={imageUrl} alt={city} />
      <h2>{city}</h2>
      <p>{country}</p>
      {visited ? <p>Já Fui!</p> : <p>Não Fui.</p>}
    </div>
  );
}

export default Card;
