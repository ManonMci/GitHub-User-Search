import './styles/Card.css';
import avatar from '../assets/github-icon.png';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import company from '../assets/icon-company.svg';
import location from '../assets/icon-location.svg';

import {Api} from '../api/Script';

function Card() {
    const data = Api();

    return (
    <div className="card">
        <div className="avatar">
            <img className="avatar-img" src={data.avatar_url} alt="image de profil" />
        </div>
        <div className="profil">
            <div className="bio">
                <div className="pseudo">
                    <div className="">
                        <h1>{data.name}</h1>
                        <p>@{data.login}</p>
                    </div>
                <div className="date">
                    <p className="p-date"></p>
                </div>
                </div>
                <p>{data.bio}</p>
            </div>
            <div className="array">
                <table>
                    <tbody>
                        <tr>
                            <td>Repos</td>
                            <p>{data.public_repos}</p>
                            <td>Followers</td>
                            <p>{data.followers}</p>
                            <td>Following</td>
                            <p>{data.following}</p>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="social">
                <ul>
                    <div className="social-1">
                        <a><li><img alt="icone de localisation" src={location}/>{data.location}</li></a>
                        <a><li> <img alt="icone de site" src={website} />{data.html_url}</li></a>
                    </div>
                    <div className="social-2">
                        <a><li> <img alt="icone de twitter" src={twitter} />{data.twitter_username}</li></a>
                        <a><li> <img alt="icone de github"  src={company}/>{data.company}</li></a>
                    </div>
                </ul>
            </div>
        </div>
       
    </div>
    )
};

export default Card;