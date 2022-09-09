interface IPlatform {
    platform: string;
}

const Platform = ({ platform }: IPlatform) => {
    return (
        <>
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
        </>
    );
};

export default Platform;
