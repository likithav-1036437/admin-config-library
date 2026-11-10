import ReactDiffViewer from "react-diff-viewer";

const oldJson = JSON.stringify(
  {
    allowRegistration: true,
    maxUsers: 50
  },
  null,
  2
);

const newJson = JSON.stringify(
  {
    allowRegistration: true,
    maxUsers: 100
  },
  null,
  2
);

export default function DiffViewer() {
  return (
    <ReactDiffViewer
      oldValue={oldJson}
      newValue={newJson}
      splitView={true}
    />
  );
}