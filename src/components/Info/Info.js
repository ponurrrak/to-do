import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {infoContent} from '../../data/dataStore.js';

const Info = () => {
  const {title, text, image, imageTitle, imageAlt} = infoContent;
  return (
    <Container>
      <Hero titleText={imageTitle} heroImageURL={image} heroImageAlt={imageAlt}/>
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  );
};

export default Info;
