import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/Activities').then(response => { 
      setActivities(response.data);
    })
  }, []);

  return (
    <div className="App">
      <NavBar />    
        <Container style={{marginTop: '7em'}}>
          <List>
          {activities.map((activity: Activity) => (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))}
          </List>
        </Container>
    </div>
  );
}

export default App;
