import React from 'react';
import Heading from './Heading';
import SubscribeForm from '../SubscribePopup/SubscribeForm';

const Newsletter = () => {
  return (
    <div className="flex-1 ">
      <Heading> Newsletter</Heading>
      <div className="mt-4 text-black">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Newsletter;
