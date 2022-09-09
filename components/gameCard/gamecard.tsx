/* eslint-disable @next/next/no-img-element */
interface IGamecard {
    title: string;
    thumbnail: string;
    platform: string;
    genre: string;
    developer: string;
    description: string;
}

const Gamecard = ({
    title,
    thumbnail,
    platform,
    genre,
    developer,
    description,
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
                        {description.slice(0, 150)}
                        {description.length > 150 && "..."}
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
                        {platform?.includes("Windows") && (
                            <img
                                src="/logos/windows.svg"
                                alt="windows-logo"
                                className="gamecard--logo"
                            />
                        )}
                        {platform?.includes("Web Browser") && (
                            <img
                                src="/logos/browser.svg"
                                alt="browser-logo"
                                className="gamecard--logo"
                            />
                        )}
                    </span>

                    <button className="gamecard--button">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gamecard;
