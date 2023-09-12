import { useRef } from 'react';
import { useCreateIframeAndLoadViewer } from "pdf_editor_aleon35_react_plugin";

function App() {
  const containerRef = useRef(null);

  const { download } = useCreateIframeAndLoadViewer({
    container: containerRef,
    fileName: "my-file.pdf",
    licenseKey: "sandbox" || "f4470da7-1552-4a1c-b410-c6939faf5854",
    locale: "en",
    tools: {
      editing: [
        "remove",
        "rotation"
      ],
      thumbnails: [
        "zoom",
        "expand"
      ],
      general: [
        "zoom",
        "search",
        "download",
        "thumbnails"
      ],
    },
    file: "https://api.printnode.com/static/test/pdf/multipage.pdf"
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
