import { PROMPT_GROUPS, EXAMPLES } from "./data.js";
import PromptGroups from "./components/PromptGroups/PromptGroups.jsx"
import Header from "./components/Header/Header.jsx"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic]=useState('');

  function SelectHandle(SelectedButton){
    setSelectedTopic(SelectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please, select a topic</p>;

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div> );
  };

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Prompt groups</h2>
          <ul>
            <PromptGroups {... PROMPT_GROUPS[0]} />
            <PromptGroups {... PROMPT_GROUPS[1]} />
            <PromptGroups {... PROMPT_GROUPS[2]} />
            <PromptGroups {... PROMPT_GROUPS[3]} />
          </ul>
        </section>
        <section id="examples"> 
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>SelectHandle('Images')}>Images</TabButton>
            <TabButton onSelect={()=>SelectHandle('Poetry')}>Poetry</TabButton>
            <TabButton onSelect={()=>SelectHandle('C# code')}>C# code</TabButton>
            <TabButton onSelect={()=>SelectHandle('XAML code')}>XAML code</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
