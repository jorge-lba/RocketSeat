import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


function App() {

  const [ latitude, setLatitude ] = useState( '' )
  const [ longitude, setLongitude ] = useState( '' )

  const geolocation = () => navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      setLatitude( latitude )
      setLongitude( longitude )
    },
    (err) => {
      console.log( err )
    },
    {
      timeout: 30000
    }
  )

  useEffect( () => geolocation(), [] )

  return( 
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="github_username" required/>
            </div>
            
            <div className="input-block">
              <label htmlFor="techs" >Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude"  >Latitude</label>
                <input type="number" name="latitude" id="latitude" required value={latitude} onChange={ e => setLatitude( e.target.value ) } />
              </div>
              <div className="input-block">  
                <label htmlFor="longitude">Longitude</label>
                <input type="number" name="longitude" id="longitude" required value={longitude} onChange={ e => setLongitude( e.target.value ) } />
              </div>
            </div>

            <button type="submit">Salvar</button>
          </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/56704254?s=400&v=4" alt="Jorge Alegretti"/>
              <div className="user-info">
                <strong>Jorge Alegretti</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.</p>
            <a href="https://github.com/jorge-lba">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/56704254?s=400&v=4" alt="Jorge Alegretti"/>
              <div className="user-info">
                <strong>Jorge Alegretti</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.</p>
            <a href="https://github.com/jorge-lba">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/56704254?s=400&v=4" alt="Jorge Alegretti"/>
              <div className="user-info">
                <strong>Jorge Alegretti</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.</p>
            <a href="https://github.com/jorge-lba">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/56704254?s=400&v=4" alt="Jorge Alegretti"/>
              <div className="user-info">
                <strong>Jorge Alegretti</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.</p>
            <a href="https://github.com/jorge-lba">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  )

}

export default App;
