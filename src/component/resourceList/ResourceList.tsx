import React from 'react'
import './style.css'

interface ResourceListProps{
    list : string[],
    onDeleteHandler:(resource:string) => void
 }

const ResourceList : React.FunctionComponent<ResourceListProps> = ({list,onDeleteHandler}) => {

    const onClickHandler = (resource:string) =>{
        onDeleteHandler(resource)
    }

    const resources = list.map(resource => {
        return(
            <li key = {resource}>
                {resource} 
                <button className = 'App-btn' onClick = {()=>onClickHandler(resource)}> Deallocate</button>
            </li>
        )    
    })
    
    return (
        <div className = 'App-list'>
            <ul className ='App-ul'>
                {resources}
            </ul>
        </div>
    )
}

export default ResourceList;