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
        // @ts-ignore
       "extract",
       "remove",
       // @ts-ignore
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
        // @ts-ignore
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
    // file: /*"http://localhost:3000/pdfs/54f860c9-a945-46e6-b211-41e4b5497e94.pdf" ||*/ "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
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
