import React from 'react';
import github from '../../public/images/download.png';

export function Footer() {
   return (
       <div>
           <div className="footer-container">
               <ul className="list-unstyled">
                  <li className="footer">
                    <a href="https://github.com/RaelNW" target="_blank" rel="noopener noreferrer">
                      <img src={github} alt="GitHub" />
                    </a>
                  </li>
                  <li className="footer">
                    <a href="https://www.instagram.com/dance.dada/" target="_blank" rel="noopener noreferrer">
                      <img src='public/images/insta-icon.jpeg' alt="Instagram" />
                    </a>
                  </li>
                  <li className="footer">
                    <a href="https://www.linkedin.com/in/raelwanjala/" target="_blank" rel="noopener noreferrer">
                      <img src="public/images/linkedinicon.png" alt="LinkedIn" />
                    </a>
                  </li>
               </ul>
           </div>
       </div>
   );
}

