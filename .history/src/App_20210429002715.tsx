import React from 'react';
import Card, { CardVariant } from './component/Card';
import EventsExample from './component/EventsExample';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import UsersPage from './component/pages/UsersPage';
import TodosPage from './component/pages/TodosPage';
import UserItemPage from './component/pages/UserItemPage';

const App = () => {
    
    return (
        <Router>
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
            <Route path={'/'} exact>
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
            </Route>
            <Route path={'/users'} exact>
                <UsersPage />
            </Route>
            <Route path={'/todos'} exact>
                <TodosPage/>
            </Route>
            <Route path={'/user/:id'}>
                <UserItemPage  />
            </Route>
            <Route path={'/todo/:id'} exact>
                <TodosPage/>
            </Route>
        </Router>
    );
};

export default App;