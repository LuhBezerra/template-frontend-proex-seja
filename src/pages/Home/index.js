import { useNavigate } from 'react-router-dom';

import './styles.css';

function Home() {

  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="app-header">
        <p>
          Olá Mundo!!
        </p>
        <button className='app-button' onClick={() => navigate('/example-posts')}>Ir para área de exemplo</button>
      </header>
    </div>
  );
}

export default Home;
