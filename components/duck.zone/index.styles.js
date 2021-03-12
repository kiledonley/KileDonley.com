import styled from 'styled-components'

export const DuckZoneContainer = styled.div`
    background-color: lightblue;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
`;


export const Duck = styled.img`
    height: 200px;
    width: 200px;
    position: absolute;
    left: ${p => p.x}px ;
    top: ${p => p.y}px;
    `;

