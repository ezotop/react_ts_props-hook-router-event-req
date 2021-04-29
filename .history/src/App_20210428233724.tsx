import React from 'react';
import Card, { CardVariant } from './component/Card';
import EventsExample from './component/EventsExample';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UsersPage from './component/pages/UserPage';
import TodosPage from './component/pages/TodosPage';

const App = () => {
    
    return (
        <Router>
            <EventsExample/>
            <Card
                onClick={(num) => console.log('Click', num)}
                variant={CardVariant.primary}
                width={'200px'}
                height={'200px'}
                >
                    <button>Button</button>
                    <div>Hello world!</div>
            </Card>
            <Route path={'/users'} exact>
                <UsersPage />
            </Route>
            <Route path={'/todos'} exact>
                <TodosPage/>
            </Route>
            
        </Router>
    );
};

export default App;