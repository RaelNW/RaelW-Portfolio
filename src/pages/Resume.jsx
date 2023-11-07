import React from 'react';
import '../index.css';
function Resume() {
  return (
    <div className="resume-container">
      <section className="professional-summary">
        <h3>Professional Summary</h3>
        <p>
          Full Stack Development Student with knowledge in JavaScript, CSS, Github, API integration, and Node.js.<br></br> Leveraging 3 years of experience in client management, product research, media buying, and videography.<br></br> Adept at project planning, communication, and problem-solving.
        </p>
      </section>

      <section className="key-skills">
        <h3>Key Skills</h3>
        <ul>
          <li>JavaScript, CSS</li>
          <li>API Integration</li>
          <li>Node.js</li>
          <li>Client Management</li>
          <li>Product Research</li>
          <li>Project Planning</li>
          <li>MySQL, Express, Node, jQuery, Bootstrap</li>
          <li>Marketing and Advertising Strategies</li>
          <li>Microsoft Office (Word, Excel, PowerPoint, Outlook)</li>
          <li>Fluent in English and Kiswahili</li>
        </ul>
      </section>

    
      <section className="work-history">
        <h3>Work History</h3>
        <div className='work-history-container'>
        <div className="job-entry-1">
          <h4>Nurse Assistant, Sacramento</h4>
          <p>09/2020 - (Current)</p>
          <p>Sacramento, California</p>
          <p>Assisted in providing high-quality patient care, <br></br>focusing on activities of daily living (ADLs) and therapeutic interventions.</p>
          <p>Collaborated with the healthcare team to ensure a holistic approach to patient well-being.</p>
          <p>Proficiently monitored and recorded vital signs, <br></br>including but not limited to blood pressure, heart rate, respiratory rate, and temperature.</p>
          <p>Implemented accurate documentation of patient conditions through the use of the Electronic Medical Record (EMR) system,<br></br> ensuring comprehensive and up-to-date patient records.</p>

        </div>

        <div className="job-entry-2">
          <h4>Client Service Executive, Maison Interactive</h4>
          <p>01/01/2019 - 05/20/2019</p>
          <p>Nairobi, Kenya</p>
          <p>Media company that creates interactive experiences and media campaigns.</p>
          <p>Conducted research on emerging media and advertising topics to enhance client proposals.</p>
          <p>Developed strategies and plans for new product campaigns,<br></br> including research, pitching, and personalized campaigns.</p>
          <p>Tested websites for seamless functionality and trained clients in navigation while addressing technical issues.</p>
        </div>

        <div className="job-entry-3">
          <h4>Media Buyer, Dentsu Aegis Network Kenya</h4>
          <p>04/24/2017 - 11/06/2017</p>
          <p>Nairobi, Kenya</p>
          <p>Advertising agency that uses digital media, outdoor media, radio, <br></br>and Television to create awareness of specific brands to target audiences.</p>
          <p>Reduced clients' budgets by 15% by negotiating media rates and researching for the best rates and value.</p>
          <p>Conducted user experience research on products for various clients across different industries.</p>
          <p>Managed up to 15 projects a month working with 3 different clients.</p>
          <p>Wrote 3-5 strategies a week for current and prospective services<br></br> that may be offered to clients in the future to help their brands meet their target sales and exposure.</p>
          <p>Participated in a project that involved interviewing 5 famous and successful business people in front of a camera: <a href="https://www.youtube.com/watch?v=FbEHZ7zOdbw">Watch here</a></p>
          <p>Assisted in training new hires on media buying processes.</p>
          <p>Led a team of 18 people in brainstorming meetings and weekly status reports.</p>
        </div>

        <div className="job-entry-4">
          <h4>Videographer/Photographer, Royal Media</h4>
          <p>05/06/2016 - 09/30/2016</p>
          <p>Nairobi, Kenya</p>
          <p>Media company that houses three television stations and 14 radio stations to cater to all tribal languages in Kenya.</p>
          <p>Launched live stream for radio at a time when Facebook live streaming was first gaining popularity in Kenya.</p>
          <p>Produced and shared 5-6 daily videos on radio shows, boosting online engagement.</p>
          <p>Conducted celebrity interviews for social media content, utilizing strong communication skills. <a href="https://www.youtube.com/watch?v=zPgsanXLGj4">Watch here</a></p>
          <p>Developed 3-6 weekly scripts for advertising and social media content.</p>
        </div>

        <div className="job-entry-5">
          <h4>Presentation Reviewer</h4>
          <p>01/01/2013 - 05/20/2022</p>
          <p>Remote</p>
          <p>Reviewed presentation materials for clarity and ease of explanation.</p>
          <p>Supported presentation experts on peace building and conflict resolution.</p>
          <p>Ensured continuity for international group presentations (50 – 150 attendees).</p>
        </div>
        </div>
      </section>

    <div className='education-container'>
      <section className="education">
        <h3>Education</h3>
        <ul>
          <li>
            <p>Certificate, Full Stack Web Development - UC Davis, California (2023)</p>
          </li>
          <li>
            <p>Certificate, Basic front-end coding Workshop - SheCodes Basics (2022)</p>
          </li>
          <li>
            <p>Bachelor of Arts (BA), Communication and media - Daystar University, Nairobi, Kenya (2016)</p>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
}

export default Resume;
