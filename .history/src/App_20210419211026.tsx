import React from 'react';
import Card, { CardVariant } from './component/Card';

const App = () => {
    return (
        <div>
            <Card
                onClick={(num) => console.log('Click', num)}
                variant={CardVariant.primary}
                width={'200px'}
                height={'200px'}
                >
                    <button>Button</button>
                    <div>Hello world!</div>
            </Card>
        </div>
    );
};

export default App;