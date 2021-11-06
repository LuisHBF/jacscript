let codeMirrorTradutor = new CodeMirror.fromTextArea(
  document.getElementById("tradutor"),
  { lineNumbers: true, mode: "javascript", theme: "default" }
);
codeMirrorTradutor.setSize("100%", "100%")
codeMirrorTradutor.refresh();
export default codeMirrorTradutor;