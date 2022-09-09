/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Platform } from "../";

interface IGamecard {
    title: string;
    thumbnail: string;
    platform: string;
    genre: string;
    developer: string;
    description: string;
    id: number;
}

const Gamecard = ({
    title,
    thumbnail,
    platform,
    genre,
    developer,
    description,
    id,
}: IGamecard) => {
    return (
        <div key={title} className="gamecard">
            <img
                src={thumbnail}
                alt={title + " thumbnail-img"}
                className="gamecard--image"
            />
            <div className="gamecard__contentdiv">
                <span>
                    <p className="gamecard--text">{title}</p>
                </span>
                <span>
                    <p className="gamecard--description">
                        {description?.slice(0, 150)}
                        {description?.length > 150 && "..."}
                    </p>
                </span>
                <div className="gamecard__subdiv">
                    <span>
                        <p className="gamecard--genre">{genre}</p>
                    </span>
                    <span>
                        <p className="gamecard--developer">{developer}</p>
                    </span>
                    <span className="gamecard--info">
                        <Platform platform={platform} />
                    </span>
                    <span className="gamecard--button">
                        <Link href={`/game/${id}`}>Details</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Gamecard;
