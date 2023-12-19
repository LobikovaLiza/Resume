import './App.css';

function App() {
  return (
    <div>
      <div style={{padding: "20px", width: "794px", height: "1123px"}}>
        <h1>Lobikova Elizaveta</h1>
        <div style={{display: "flex"}}>
          <div className="column" style={{flex: "3"}}>
            <p className="short-description">Student, junior frontend developer. I have no work experience.</p>
          </div>
          <div className="column" style={{flex: "1"}}>
            <p>🌐 Minsk, Belarus</p>
            <p>✉️<a href="mailto:hi@ildarkarymov.ru">lobikovaliza9@gmail.com</a></p>
            <p>💬Telegram:<a href="https://telegram.me/lizalobik"> @lizalobik</a></p>
          </div>
        </div>
        <div style={{display: "flex"}}>
          <div className="column main" style={{flex: "3"}}>
            <h2>Projects</h2>
            <h3><a href="https://github.com/LobikovaLiza/Redax1">Redax</a></h3>
            <p className="description">I was responsible for maintenance of diagnostics and software update services. Go and Python were used to develop services running directly on the vehicle.</p>
            <ul className="skills">
              <li>CSS</li>
              <li>HTML</li>
              <li>Json-server</li>
              <li>React</li>
              <li>React-dom</li>
              <li>React-redux</li>
              <li>React-router-dom</li>
              <li>Redux-persist</li>
              <li>React-thunk</li>
              <li>zod</li>
            </ul>
            
            <h3><a href="https://github.com/LobikovaLiza/Nottion">Notion</a></h3>
            <p className="description">Implementation of a multi-user note-taking application. Each user can create, delete and edit their own notes.</p>
            <ul className="skills">
              <li>CSS</li>
              <li>HTML</li>
              <li>React</li>
              <li>React-dom</li>
            </ul>
            <h3><a href="https://github.com/LobikovaLiza/Lamoda">Lamoda</a></h3>
            <p className="description">Implementation of an online store with the ability to filter and sort products.</p>
            <ul className="skills">
              <li>CSS</li>
              <li>HTML</li>
              <li>React</li>
              <li>React-dom</li>
              <li>Json-server</li>
              <li>React-router-dom</li>
              <li>zod</li>
            </ul>
            
          </div>
          <div className="column sidebar" style={{flex: "1"}}>
            <section>
              <h2>Education</h2>
              <p className="name">Belarusian State University</p>
              <p className="meta">Faculty of Mechanics and Mathematics</p>
            </section>
            
            <section>
              <h2>Hobbies</h2>
              <p className="name">Solving puzzles</p>
              <p className="description">I like solving various puzzles, and most of all, when solving them, I like finding methods for solving such problems</p>
              <p className="name">Watching documentaries</p>
              <p className="description">I like to learn about something new. Whether it's programming, history, or tradition.</p>
            </section>
            <section>
              <h2>Languages</h2>
              <p>Russian</p>
              <p>Belarusian</p>
              <p>English(A2)</p>
            </section>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
