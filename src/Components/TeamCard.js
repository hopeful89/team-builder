import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 5px 5px rgba(150,150,150, .9);
    margin: 1%;
    background: rgba(125,125,125,.5);
    padding: 3%;
    width: 25%;
    height: 25%;
`;

const TeamCard = ({ member, memberToEdit }) => {
    return (

            <CardContainer>
                <h3>Name: <span>{member.name}</span></h3>
                <h4>Role: <span>{member.role}</span></h4>
                <p>email: <span>{member.email}</span></p>
                <button onClick={()=> {memberToEdit(member)}}>Edit</button>
            </CardContainer>


    )
}

export default TeamCard