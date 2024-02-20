import { MdLocationPin } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { UserProps } from "../../types/user";
import { Link } from "react-router-dom";
import Style from "./user.module.scss";

const User = ({ login, avatar_url, followers, following, location, bio, name, public_repos }: UserProps) => {
    return (
        <div className={Style.UserContainer}>
            <img className={Style.UserImg} src={avatar_url} alt={login} />
            <h2 className={Style.UserBio}>{login}</h2>
            {name && <p>{name}</p>}
            {bio && (
                <div className={Style.UserBio}>
                    <h4>{bio}</h4>
                </div>
            )}
            {location && (
                <p className={Style.UserLocation}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div className={Style.UserFollow}>
                <div className={Style.UserInfo}>
                    <div>
                        <p><IoPersonSharp /> Seguidores: {followers}</p>
                    </div>
                    <div>
                        <p><IoPersonSharp /> Seguindo: {following}</p>
                    </div>
                    <div>
                        <p>Repositórios públicos: {public_repos}</p>
                    </div>
                </div>
            </div>
            <div className={Style.UserLinks}>
                <Link className={Style.UserLink} to={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer" >Perfil</Link>
                <Link className={Style.UserLink} to={`https://github.com/${login}?tab=repositories`} target="_blank" rel="noopener noreferrer">Projetos</Link>

            </div>
        </div>
    );
};

export default User;
