interface IGamecard {
    title: string;
    thumbnail: string;
    platform: string;
    genre: string;
}

const Gamecard = ({ title, thumbnail, platform, genre }: IGamecard) => {
    return (
        <div key={title} className="gamecard">
            <img
                src={thumbnail}
                alt={title + " thumbnail-img"}
                className="gamecard--image"
            />
            <p className="gamecard--text">{title}</p>
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
        </div>
    );
};

export default Gamecard;
