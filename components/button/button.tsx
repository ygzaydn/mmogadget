import Link from "next/link";

interface IButton {
  href: string;
  text: string;
  wider?: boolean;
  align?: boolean;
}

const Button = ({ href, text, wider, align }: IButton) => {
  console.log(wider);
  const styleToAdd = {
    padding: "",
    margin: "",
  };
  if (wider !== undefined) {
    styleToAdd.padding = "1rem 2rem";
  }
  if (align) {
    styleToAdd.margin = "auto 0 0 0 ";
  }
  return (
    <Link href={href}>
      <a href={href} className="button" style={styleToAdd}>
        {text}
      </a>
    </Link>
  );
};

export default Button;
