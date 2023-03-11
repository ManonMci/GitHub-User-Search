import './styles/Mode.css';
import moon from '../assets/icon-moon.svg';

function Mode(){
    return (
        <div className="devFinder">
            <p>devfinder</p>
            <div className="Dark-mode">
                <button className="dark-button">D A R K</button>
                <img src={moon}/>
            </div>
        </div>
    );
}

export default Mode;