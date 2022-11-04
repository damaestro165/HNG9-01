import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';
import SlackIcon from '../../assets/slack.png';
import GitHubIcon from '../../assets/github.png';

function Main() {
  return (
    <main>
      <section className='link-container'>
        <a
          href='https://twitter.com/yomi_dev'
          target='_blank'
          className='btn'
          id='twitter'
        >
          Twitter Link
        </a>
        <a
          href='https://training.zuri.team/'
          id='btn__zuri'
          target='_blank'
          className='btn'
        >
          Zuri Team
        </a>
        <a
          href='http://books.zuri.team/'
          target='_blank'
          className='btn'
          id='books'
        >
          Zuri Books
        </a>
        <a
          href='https://books.zuri.team/python-for-beginners?ref_id=yomi_dev'
          target='_blank'
          className='btn'
          id='book__python'
        >
          Python Books
        </a>
        <a
          href='https://background.zuri.team'
          target='_blank'
          className='btn'
          id='pitch'
        >
          Background Check for Coders
        </a>

        <a
          href='https://books.zuri.team/design-rules'
          target='_blank'
          className='btn'
          id='book__design'
        >
          Design Books
        </a>
        <a href='/contact' className='btn' id='contact'>
          Contact Me
        </a>
      </section>
      <section className='socials'>
        <a href=''>
          <img src={SlackIcon} alt='slack-Icon' />
        </a>
        <Link href='https://github.com/damaestro165/HNG9-01'>
          <img src={GitHubIcon} alt='slack-Icon' />
        </Link>
      </section>
    </main>
  );
}

export default Main;
