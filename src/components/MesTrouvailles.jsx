import { Link } from "react-router-dom";
import myImage from "../assets/kirbo.png"

export function MesTrouvailles (props)
{
    console.log(myImage);

    return(
        <ul>
            {props.films.map((film) =>
            <>
            <li key={film.show.id}>
                <p>{film.show.name}</p>
                <img src={film.show.image?.medium || myImage} alt={"Image of "+film.show.name}/>
            </li>
            <Link to={'show/'+ film.show.id}> Voir les infos </Link>
            </>
            )}
            
        </ul>
    )
}