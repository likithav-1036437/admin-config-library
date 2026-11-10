interface Version {
  version: number;
  modifiedBy: string;
  modifiedDate: string;
}

const versions: Version[] = [
  {
    version: 1,
    modifiedBy: "Admin",
    modifiedDate: "2026-10-01"
  },
  {
    version: 2,
    modifiedBy: "Admin",
    modifiedDate: "2026-10-15"
  },
  {
    version: 3,
    modifiedBy: "Likitha",
    modifiedDate: "2026-10-20"
  }
];

export default function VersionHistory() {
  return (
    <div>
      <h3>Version History</h3>

      {versions.map((v) => (
        <div key={v.version}>
          <strong>V{v.version}</strong>

          <p>{v.modifiedBy}</p>

          <p>{v.modifiedDate}</p>
        </div>
      ))}
    </div>
  );
}