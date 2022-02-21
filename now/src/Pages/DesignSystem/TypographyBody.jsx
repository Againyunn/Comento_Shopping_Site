import React from 'react'
import styled from "styled-components";
import MakeTable from '../../Components/MakeTable';

export default function TypographyBody() {
  const BodyBackgroundColor = styled.body`
  background-color : white;
  width : 2200px;
  heigh : 1307px;
  Radius : 40px;
  padding : 100px, 100px, 120px, 100px;
  display : flex;
  position: absolute;
  left: 0px;
  top: 0px;

  /* Basic / White */

  background: #FFFFFF;
  border-radius: 40px;
  `

  const TextStyle = styled.p`
  /* Title */
  position: static;
  width: 418px;
  height: 104px;
  left: 0px;
  top: 0px;
  
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 104px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  
  /* 화면 내의 위치 */
  position: absolute;      
  left: 100px;
  top: 100px;

  /* Basic / Black */
  color: #000000;
  
  
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 0px;
  `
  const TextSmallTitle = styled.p`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;

  /* 화면 내의 위치 */
  position: absolute;      
  left: 100px;
  top: 224px;

  /* identical to box height, or 130% */

  letter-spacing: -0.01em;

  /* Basic / Black */

  color: #000000;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 20px 0px;
`

  const TableStyle = styled.table`
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

// const MakeTable = (rowNum, columNum, ...props) => {

// }



  return (
    <BodyBackgroundColor>
      <div>
        <TextStyle>
          Typography
        </TextStyle>
        <TextSmallTitle>타이포는 'Spoga Han Neo'서체를 기본으로 합니다.</TextSmallTitle>
      </div>
      <TableStyle >
        <th>
          <td style={{
            position: 'static',
            width: '200px',
            height: '26px',
            left: '40px',
            top: '20px'
          }}><TableHeaderText>Category</TableHeaderText></td>
          <td style={{
            position: 'static',
            width: '600px',
            height: '26px',
            left: '290px',
            top: '20px'
          }}><TableHeaderText>Sample</TableHeaderText></td>
          <td style={{
            position: 'static',
            width: '300px',
            height: '26px',
            left: '940px',
            top: '20px'
          }}><TableHeaderText>Typeface</TableHeaderText></td>
          <td style={{
            position: 'static',
            width: '240px',
            height: '26px',
            left: '1290px',
            top: '20px'
          }}><TableHeaderText>Weight</TableHeaderText></td>
          <td style={{
            position: 'static',
            width: '200px',
            height: '26px',
            left: '1580px',
            top: '20px'
          }}><TableHeaderText>Size</TableHeaderText></td>
          <td style={{
            position: 'static',
            width: '300px',
            height: '26px',
            left: '1830px',
            top: '20px'
          }}><TableHeaderText>Line height</TableHeaderText></td>
        </th>
        <tr>
        </tr>
      </TableStyle>
    </BodyBackgroundColor>
  )
}
