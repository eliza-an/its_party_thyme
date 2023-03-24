import React  from 'react' ;
import Column from './Components/Column';
import Row from './Components/Row';
import Card from '/Components/Card';
import Button from './Components/Button';


function RightHandDiv(props) {
    return <div className="RightHandDiv">{props.children}
    <Column className='column'>
        <Card></Card>
        <Card></Card>

     </Column>

    <Column className='column'>
        <Card></Card>
        <Card></Card>
    </Column>

  
    </div>;
  }
  
  export default RightHandDiv;
