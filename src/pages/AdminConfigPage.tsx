import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ConfigList from "../components/ConfigList";
import JsonEditor from "../components/JsonEditor";
import VersionHistory from "../components/VersionHistory";
import DiffViewer from "../components/DiffViewer";
import { configs } from "../services/configService";

export default function AdminConfigPage() {
  const [search, setSearch] = useState("");

  const [selectedConfig, setSelectedConfig] =
    useState(configs[0]);

  const filteredConfigs =
    configs.filter((c) =>
      c.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Config Library</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ConfigList
        configs={filteredConfigs}
        onSelect={setSelectedConfig}
      />

      <hr />

      <h2>JSON Editor</h2>

      <JsonEditor
        config={selectedConfig.data}
      />

      <hr />

      <VersionHistory />

      <hr />

      <h2>Version Diff</h2>

      <DiffViewer />
    </div>
  );
}