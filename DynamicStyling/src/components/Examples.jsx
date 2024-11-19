import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
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
        <Section title = "Examples" id="examples"> 
            <menu>
                <TabButton isSelected = {selectedTopic === 'Images'} onClick={()=>SelectHandle('Images')}>Images</TabButton>
                <TabButton isSelected = {selectedTopic === 'Poetry'} onClick={()=>SelectHandle('Poetry')}>Poetry</TabButton>
                <TabButton isSelected = {selectedTopic === 'C# code'} onClick={()=>SelectHandle('C# code')}>C# code</TabButton>
                <TabButton isSelected = {selectedTopic === 'XAML code'} onClick={()=>SelectHandle('XAML code')}>XAML code</TabButton>
            </menu>
            {tabContent}
        </Section>
    );
}