import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Condition from './condition';
import Icon from './Icon';

const WeatherCard = (props) => {
    const red = 200;
    const Card = styled.div`
        margin: 0 auto;
        background: linear-gradient(to bottom, rgba(${red},200,200), lightblue);
        width: 200px;
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 15px;
        align-items: center;
    `

    return ( 
       <Card>
           <Location/>
           <Icon/>
           <Condition/>
       </Card>
     );
}
 
export default WeatherCard;