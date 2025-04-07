import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [alertState, setAlertState] = useState(false);


  let items = ["1", "2", "3", "4", "5"];
  let handleOnSelectItem = (item: string) =>
  {
    console.log(item);
  }


  return (
  <>
    { alertState && <Alert onClose={() => setAlertState(false)}>AAAAAAAAAAAAAAAAAAAAAAAAAAA</Alert>}
    <ListGroup items={items} heading="Numbers" onSelectItem={handleOnSelectItem}/>
    <Button buttonName="Scream" buttonColor="dark" buttonFun={() => setAlertState(true)}/>
  </>
  )
}

export default App
