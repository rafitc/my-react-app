import React from 'react';
import styled from '@emotion/styled';

const Icon = (prps) => {
    const Icon = styled.img`
        width: 28%;
    `

    return ( 
        <Icon className= 'icon' src= "./img/cloud.png" alt= ''></Icon>
     );
}
 
export default Icon;