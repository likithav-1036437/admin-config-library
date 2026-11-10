import { useState } from "react";
import Ajv from "ajv";

const schema = {
  type: "object",
  properties: {
    allowRegistration: {
      type: "boolean"
    },
    maxUsers: {
      type: "number"
    }
  }
};

const ajv = new Ajv();
const validate = ajv.compile(schema);

interface Props {
  config: any;
}

export default function JsonEditor({ config }: Props) {
  const [jsonText, setJsonText] = useState(
    JSON.stringify(config, null, 2)
  );

  const [error, setError] = useState("");

  const handleValidate = () => {
    try {
      const parsed = JSON.parse(jsonText);

      const valid = validate(parsed);

      if (valid) {
        setError("JSON Valid ✅");
      } else {
        setError(
          JSON.stringify(validate.errors)
        );
      }
    } catch {
      setError("Invalid JSON Format");
    }
  };

  return (
    <>
      <textarea
        rows={15}
        cols={60}
        value={jsonText}
        onChange={(e) =>
          setJsonText(e.target.value)
        }
      />

      <br />

      <button onClick={handleValidate}>
        Validate
      </button>

      <p>{error}</p>
    </>
  );
}