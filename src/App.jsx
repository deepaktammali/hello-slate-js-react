import { useState } from "react"
import { createEditor } from "slate"
import { Slate, withReact } from "slate-react"
import SlateEditor from "./SlateEditor"

// This would act as the initial value for the contenteditable
// or the editor context that we are initializing
const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: "A line in a paragraph"
      }
    ]
  }
];

function App() {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    // Slate is basically a context provider
    // It would keep track of the editor value, its plugins, its selection and any changes that would occur
    // Slate value prop is used as the initial value of the editor.children
    // If you want a different value, you could modify it directly.
    <Slate editor={editor} value={initialValue} >
      <SlateEditor />
    </Slate >
  )
}

export default App
