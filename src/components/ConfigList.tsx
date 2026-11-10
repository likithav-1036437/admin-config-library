import { Config } from "../types/Config";

interface Props {
  configs: Config[];
  onSelect: (config: Config) => void;
}

const ConfigList = ({ configs, onSelect }: Props) => {
  return (
    <div>
      {configs.map((config) => (
        <div
          key={config.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "5px",
            cursor: "pointer"
          }}
          onClick={() => onSelect(config)}
        >
          <h4>{config.name}</h4>
          <p>Version: {config.version}</p>
        </div>
      ))}
    </div>
  );
};

export default ConfigList;