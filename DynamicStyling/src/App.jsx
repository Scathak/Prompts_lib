import { PROMPT_GROUPS, EXAMPLES } from "./data.js";
import PromptGroups from "./components/PromptGroups/PromptGroups.jsx"
import Header from "./components/Header/Header.jsx"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic]=useState('');

  function SelectHandle(SelectedButton){
    setSelectedTopic(SelectedButton);
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
            {PROMPT_GROUPS.map((groupItem) =>(
              <PromptGroups key={groupItem.title} {...groupItem} />
              ))}
          </ul>
        </section>
        <section id="examples"> 
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === 'Images'} onSelect={()=>SelectHandle('Images')}>Images</TabButton>
            <TabButton isSelected = {selectedTopic === 'Poetry'} onSelect={()=>SelectHandle('Poetry')}>Poetry</TabButton>
            <TabButton isSelected = {selectedTopic === 'C# code'} onSelect={()=>SelectHandle('C# code')}>C# code</TabButton>
            <TabButton isSelected = {selectedTopic === 'XAML code'} onSelect={()=>SelectHandle('XAML code')}>XAML code</TabButton>
          </menu>
          {console.log(selectedTopic)}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
