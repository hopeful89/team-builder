import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const TeamBuilderForm = (props) => {
    const initValue = {name: '', role: 'Front-End', email: ''}
    const [member, setMember] = useState(initValue)

    useEffect(()=>{
        return (!props.memberEdit ? undefined : setMember(props.memberEdit));
    }, [props.memberEdit])
    // console.log(member)

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        if(!props.isEditing){
            (member.name !== "" && member.email !== "" ? props.addNewMember(member) : alert('no way charlie'))
            setMember(initValue)
        }else {
            props.editMember(member)
            setMember(initValue)
        }
  
    }

    return (
        <FormContainer onSubmit={submitForm}>
            <label htmlFor="name">Name: <input name="name" id="nameInput" placeholder='Name' value={member.name} onChange={handleChanges}></input></label>
            
            <label htmlFor="role"> 
            Role:   <select name="role" id='roleInput' placeholder="Role" value={member.role} onChange={handleChanges}>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="Lead">Lead</option>
                    </select>
            </label>

            <label htmlFor="email">
                Email: <input type="email" name="email" id='emailInput' placeholder="Email" value={member.email} onChange={handleChanges}></input>
                <button type="submit">Submit</button>
            </label>
        </FormContainer>
    )
}

export default TeamBuilderForm