import './App.css';
import tg from './images/telegram.png'
import bg from './images/bg-tg6.png'
import btc from './images/tg-btc-logo.jpg'

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
                    <div className={'tg-logo-circle'}>
                        <img src={btc} alt={'btc-logo'}/>
                    </div>
                    <div className={'tg-name'}>
                        TRADER | Алексей Мирнов
                    </div>
                    <div className={'tg-followers'}>
                        3000+ subscribers
                    </div>
                    <div className={'tg-add-info'}>
                        💎Место, которое ты долго искал!
                    </div>
                    <div className={'tg-work-with'}>
                        ✔️Сотрудничество: <a href={'https://t.me/AleksProdu'} target="_blank">@AleksProdu</a>
                    </div>
                    <a
                        className="App-link"
                        href="https://t.me/+89agRsvcAlFkODcy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join Channel
                    </a>
                    <div className={'tg-invited'}>
                        You are invited to the channel <span className={'bold'}>TRADER | Алексей Мирнов</span>. Click above to join.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
