import React from 'react'
import styled from 'styled-components';

export default function MakeTable({ data }) {

    const TableContentStyle = styled.table`
    /* Head */
  
  
    /* Auto layout */
  
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0px 20px 40px;
  
    position: absolute;
    width: 2000px;
    height: 66px;
    left: 100px;
    top: 451px;
  
    /* Primary01 */
  
    background: #854BFF;
    border-radius: 8px;
  
    /* Inside auto layout */
  
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 36px 0px;
    `
  
   const TableHeaderText = styled.p`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height, or 130% */
  
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
  
    /* Basic / White */
  
    color: #FFFFFF;
  
  
    /* Inside auto layout */
  
    flex: none;
    order: 5;
    flex-grow: 0;
    margin: 0px 50px;
    `

    const CategoryTextStyle = styled.p`
    /* text */


    position: static;
    width: 200px;
    height: 26px;
    left: 40px;
    top: 6px;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height, or 130% */

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    /* Primary01 */

    color: #854BFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 50px;
    `

    return (
            <tbody>
                {data.map(({ category, Sample, typeface, weight, size, lineHeight}) => (
                    <tr key={category + Sample + typeface, weight, size, lineHeight}>
                        <td>{category}</td>
                        <td>{Sample}</td>
                        <td>{weight}</td>
                        <td>{size}</td>
                        <td>{lineHeight}</td>
                    </tr>
                ))}
            </tbody>
    );
}
