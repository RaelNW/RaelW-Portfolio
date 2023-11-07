import React from 'react';
import github from '../../public/images/download.png';

export function Footer() {
   return (
       <div>
           <div className="footer-container">
               <ul className="list-unstyled">
                  <li className="footer">
                    <a href="https://github.com/RaelNW">
                      <img src={github} alt="GitHub" />
                    </a>
                  </li>
                  <li className="footer">
                    <a href="https://www.instagram.com/dance.dada/">
                      <img src='public/images/insta-icon.jpeg' alt="Instagram" />
                    </a>
                    <a href="https://www.instagram.com/dance.dada/"></a>
                  </li>
                  <li className="footer">
                    <a href="https://www.linkedin.com/in/raelwanjala/">
                      <img src="public/images/linkedinicon.png" alt="LinkedIn" />
                    </a>
                    <a href="https://www.linkedin.com/in/raelwanjala/"></a>
                  </li>
               </ul>
           </div>
       </div>
   );
}

