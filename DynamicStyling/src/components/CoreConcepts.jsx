
import PromptGroups from "../components/PromptGroups/PromptGroups.jsx";
import { PROMPT_GROUPS } from "../data.js";
export default function CoreConcept(){
    return(
        <section id="core-concepts">
        <h2>Prompt groups</h2>
        <ul>
          {PROMPT_GROUPS.map((groupItem) =>(
            <PromptGroups key={groupItem.title} {...groupItem} />
            ))}
        </ul>
      </section>
    );
}