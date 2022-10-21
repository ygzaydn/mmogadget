import Link from "next/link";

interface IButton {
    href: string;
    text: string;
    wider?: boolean;
}

const Button = ({ href, text, wider }: IButton) => (
    <Link href={href}>
        <a
            href={href}
            className="button"
            style={wider ? { padding: "1rem 2rem" } : {}}
        >
            {text}
        </a>
    </Link>
);

export default Button;
