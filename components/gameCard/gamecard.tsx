interface IGamecard {
  title: string;
  thumbnail: string;
}

const Gamecard = ({ title, thumbnail }: IGamecard) => {
  return (
    <div key={title} className="gamecard">
      <img
        src={thumbnail}
        alt={title + " thumbnail-img"}
        className="gamecard--image"
      />
      <p className="gamecard--text">{title}</p>
    </div>
  );
};

export default Gamecard;
