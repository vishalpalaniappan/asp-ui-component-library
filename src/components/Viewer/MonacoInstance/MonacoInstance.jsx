import React, { useRef } from 'react';

import Editor from '@monaco-editor/react';

import "./MonacoInstance.scss"

export const MonacoInstance = () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <Editor
    height="90vh"
    defaultLanguage="javascript"
    defaultValue="// some comment"
    onMount={handleEditorDidMount}
    theme="vs-dark"
    />
  );
}