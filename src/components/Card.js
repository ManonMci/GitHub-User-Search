import "./styles/Card.css";
import twitter from "../assets/icon-twitter.svg";
import website from "../assets/icon-website.svg";
import company from "../assets/icon-company.svg";
import location from "../assets/icon-location.svg";

function Card({ data }) {
  if (data.message === "Not Found") {
    return "Aie.. aucun utilisateur trouvé :(";
  }

  if (data.documentation_url === "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting") {
    return "Oups.. Vous ne pouvez plus envoyer de requete Api !";
  }

  return (
    <div className="global">
      <div className="card">
        <div className="avatar">
          <img
            className="avatar-img"
            src={data.avatar_url}
            alt="image de profil"
          />
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
                  <td>Followers</td>
                  <td>Following</td>
                </tr>
                <tr>
                  <td className="td-value">{data.public_repos}</td>
                  <td className="td-value">{data.followers}</td>
                  <td className="td-value">{data.following}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="social">
            <ul>
              <div className="social-1">
                <a>
                  <li>
                    <img alt="icone de localisation" src={location} />
                    {data.location}
                  </li>
                </a>
                <a>
                  <li>
                    {" "}
                    <img alt="icone de site" src={website} />
                    {data.html_url}
                  </li>
                </a>
              </div>
              <div className="social-2">
                <a>
                  <li>
                    {" "}
                    <img alt="icone de twitter" src={twitter} />
                    {data.twitter_username}
                  </li>
                </a>
                <a>
                  <li>
                    {" "}
                    <img alt="icone de github" src={company} />
                    {data.company}
                  </li>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
