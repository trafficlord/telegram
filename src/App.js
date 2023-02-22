import logo from './logo.svg';
import './App.css';
import tg from './images/telegram.png'
import bg from './images/bg-tg6.png'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img className={'tg-logo'} src={tg} alt={'tg'}/>
                <span className={'logo-name'}>Telegram</span>
            </header>
            <div className={'App-body'}>
                <img src={bg} className={'body-bg'} alt={'bg'}/>
                <div className={'info-block'}>
                    <div className={'tg-name'}>
                        TRADER | Алексей Мирнов
                    </div>
                    <a
                        className="App-link"
                        href="https://t.me/+89agRsvcAlFkODcy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
