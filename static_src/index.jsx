import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// let counter = 1;

// const component = (counter) = <ul>
//     <li style={{ color: 'red' }}>Урок1. Настраиваем среду разработки</li>
//     <li>Урок2. Погружаемся в React.</li>
//     <li>Счётчик: { counter }</li>;
// </ul>

ReactDOM.render(
    <MuiThemeProvider>
        <MessageField />
    </MuiThemeProvider>,
    document.getElementById('root'),
);