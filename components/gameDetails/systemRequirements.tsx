interface ISystemReq {
    systemReq?: {
        graphics: string;
        memory: string;
        os: string;
        processor: string;
        storage: string;
    };
}

const SystemRequirements = ({ systemReq }: ISystemReq) => (
    <div className="gameDetail--minimumSpec">
        <p className="gameDetail--minimumSpec--title center">
            Minimum System Requirements
        </p>
        <div className="gameDetail--minimumSpec--spec">
            <span>
                <p className="white">Graphics: </p>
                <p className="end">{systemReq?.graphics}</p>
            </span>
            <span>
                <p className="white">Memory: </p>
                <p className="end">{systemReq?.memory}</p>
            </span>
            <span>
                <p className="white">Processor: </p>
                <p className="end">{systemReq?.processor}</p>
            </span>
            <span>
                <p className="white">Storage: </p>
                <p className="end">{systemReq?.storage}</p>
            </span>
            <span>
                <p className="white">OS: </p>
                <p className="end">{systemReq?.os}</p>
            </span>
        </div>
    </div>
);

export default SystemRequirements;
