import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton.jsx';
export default function Examples(){
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
    );
}