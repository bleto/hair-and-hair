import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; Hair&Hair</li>
        <li>
          <Link to="/regulamin">Regulamin</Link>
        </li>
        <li>
          Created by:{' '}
          <a href="https://github.com/bleto" target="_blank" rel="noreferrer">
            Softbeat
          </a>
        </li>
      </ul>
    </footer>
  );
}
