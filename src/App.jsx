import { useRef } from 'react';
import { useCreateIframeAndLoadViewer } from "pdf_editor_aleon35_react_plugin";

function App() {
  const containerRef = useRef(null);

  const { download } = useCreateIframeAndLoadViewer({
    container: containerRef,
    fileName: "my-file.pdf",
    uuid: "some-user",
    licenseKey: "sandbox",
    locale: "en",
    tools: {
      editing: [
       "extract",
       "remove",
        "move"
      ],
      thumbnails: [
        "zoom",
        "expand"
      ],
      general: [
        "thumbnails",
        "download",
        "search",
        "panel-toggle",
        "zoom",
        "chat"
      ],
    },
    files: [
      {
        url: "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
        name: "my-file1.pdf"
      },
      {
        url: "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
        name: "my-file2.pdf"
      }
    ],
  });


  return (
    <div>
      <button onClick={download}>Download</button>
      <div className="container" id="pdf" ref={containerRef}>
    </div>
    </div>
  );
}

export default App;
