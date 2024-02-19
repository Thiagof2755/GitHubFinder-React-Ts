import { UserProps } from "../types/user"
import { useState  } from "react"
import Search from "../components/Search/"
import User from "../components/User";
import ErrorUsuario from "../components/Error/ErrorUsuario";

const Home = () => {

    const [user, setUser] = useState< UserProps | null>(null);
    const [errorUsuario, setErrorUsuario] = useState (false);

    const loadUser = async (userName :string) => {
        setErrorUsuario(false);
        setUser(null);
        const res = await fetch (`https://api.github.com/users/${userName}`);
        const data = await res.json ();

        if (res.status === 404 ){
            setErrorUsuario(true);
            return;
        }
        const {avatar_url, login, location , followers , following } = data;
        const userData : UserProps = {
            avatar_url,
            login,
            location,
            followers ,
            following,
        };
        setUser(userData);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && (<User{...user}/>)}
            {errorUsuario && <ErrorUsuario/>}
        </div>
    );
};

export default Home;