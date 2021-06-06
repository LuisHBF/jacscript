let codeMirror = new CodeMirror.fromTextArea(
  document.getElementById("editor"),
  { lineNumbers: true, mode: "javascript", theme: "default" }
);

codeMirror.setSize("100%", "100%")

export default codeMirror;