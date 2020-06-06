import React, { useState } from 'react';
import './App.css';
import TeamBuilderForm from './Components/Form'
import TeamCard from './Components/TeamCard'
// Static data for init

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [memberEdit, setMemberEdit] = useState()
  const [teamBuild, setTeamBuild] = useState([])

  const memberToEdit = (member) => {
    setMemberEdit(member)
    setIsEditing(true);
  }

  const addNewMember = member => {
    setTeamBuild([{...member, id: Date.now() }, ...teamBuild])//can also add ids with {...member, id: Date.now() } spreads the object and adds an id
  }

  const editMember = (member) => {
    teamBuild.map(obj => {
      if(member.id === obj.id){
        console.log('memberchange', member);
        obj.name = member.name
        obj.role = member.role
        obj.email = member.email
        setIsEditing(false)
        setMemberEdit()
        return//modify data without breaking it
      }
    })
  }
  // console.log(teamBuild)
  // console.log(memberEdit)

  return (
    <div className="App">
      <TeamBuilderForm addNewMember={addNewMember} memberToEdit={memberToEdit} memberEdit={memberEdit} isEditing={isEditing} editMember={editMember}/>
      {(teamBuild.length === 0
      ?<div>please add team members</div>
      :<div className="teams">
        {teamBuild.map((obj, index) => {
          return <TeamCard member={obj} key={index} memberToEdit={memberToEdit} setIsEditing={setIsEditing}/>
      })}
    </div>)}


    </div>
  );
}

export default App;

// ### STEP 1 - Setup your state

// - [ ] Import the `useState` hook and set up state to keep your team members list.
// - [ ] Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.
// - [ ] Render your list of team members.

// ### STEP 2 - Build your form

// - [ ] In `Form.js` build out your markup.
// - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
// - [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
// - [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).

// Now you are finished with MVP! Move on to the stretch goals at the bottom. The first is to add the functionality to edit members. As this is a very complicated process, steps have been included here to help you through that.
