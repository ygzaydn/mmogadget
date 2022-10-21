import Link from "next/link";

interface IHoverLink {
    href: string;
    text: string;
    color: string;
}

const HoverLink = ({ href, text, color }: IHoverLink) => (
    <Link href={href}>
        <a
            href={href}
            className={
                color === "primary"
                    ? "hoverLink hoverLink--primary"
                    : "hoverLink hoverLink--secondary"
            }
        >
            {text}
        </a>
    </Link>
);

export default HoverLink;
