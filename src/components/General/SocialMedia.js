import React from 'react';
import { MdEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MAIL_ADDRESS, PHONE_NUMBER } from '../../config/homePage/contact';

function SocialMedia() {
  return (
    <div>
      <ul className='home-about-social-links'>
        <li className='social-icons'>
          <a
            href={`tel:${PHONE_NUMBER}`}
            target='_blank'
            rel='noreferrer'
            className='icon-colour home-social-icons'
          >
            <BsFillTelephoneFill className='social-icon' />
          </a>
        </li>
      </ul>
      <ul className='home-about-social-links'>
        <li className='social-icons'>
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target='_blank'
            rel='noreferrer'
            className='icon-colour home-social-icons'
          >
            {' '}
            <ImWhatsapp className='social-icon' />
          </a>
        </li>
      </ul>
      <ul className='home-about-social-links'>
        <li className='social-icons'>
          <a
            href={`mailto:${MAIL_ADDRESS}`}
            target='_blank'
            rel='noreferrer'
            className='icon-colour home-social-icons'
          >
            <MdEmail className='social-icon' />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SocialMedia;
