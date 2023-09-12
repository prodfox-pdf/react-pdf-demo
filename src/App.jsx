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
    file: /*"http://localhost:3000/pdfs/54f860c9-a945-46e6-b211-41e4b5497e94.pdf" ||*/ "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
  });

  return (
    <div>
      <button onClick={download}>Download</button>
      <div style={{
        width: "calc(100%)",
        height: "calc(100vh - 40px)",
        background: "white",
        border: "1px solid grey"}} id="pdf" ref={containerRef}>
    </div>
    </div>
  );
}

export default App;
