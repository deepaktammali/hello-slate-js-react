import React, { useCallback } from "react";
import { Transforms, Editor, Text } from "slate";
import { DefaultElement, Editable, useSlate } from "slate-react";
import CodeBlock from "./Blocks/CodeBlock";
import Leaf from "./Blocks/Leaf";
import { CustomEditor } from "./helper";

const SlateEditor = () => {
  const editor = useSlate();

  const editorRenderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeBlock {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const editorRenderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div>
      {/* The main editable component */}
      {/* The Editable component would render a rich text content editable for the nearest editor context */}
      <Editable
        renderElement={editorRenderElement}
        renderLeaf={editorRenderLeaf}
        onKeyDown={(e) => {
          if (!e.ctrlKey) {
            return;
          }

          switch (e.key) {
            case "`": {
              e.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            }
            case "b": {
              e.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
          }
        }}
      />
    </div>
  );
};

export default SlateEditor;
