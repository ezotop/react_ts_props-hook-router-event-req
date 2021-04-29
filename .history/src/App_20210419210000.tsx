import React from 'react';
import Card, { CardVariant } from './component/Card';

const App = () => {
    return (
        <div>
            <Card variant={CardVariant.outlined} width={'200px'} height={'200px'}>
                <button>Button</button>
                <div>Hello world!</div>
            </Card>
        </div>
    );
};

export default App;