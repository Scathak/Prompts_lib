import "./PromptGroups.css"

export default function PromptGroups(priority){
    return(
      <li> 
        <img src={priority.image} alt={priority.title}/>
        <h3> {priority.title}</h3>
        <p> {priority.description}</p>
      </li>
    )
  }