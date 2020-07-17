import React from 'react';
import ReactDOM from 'react-dom';
import App, { onSubmitFunc } from './App';

const submit:onSubmitFunc = ({name, description}) => {
    console.log(`name : ${name}`);
    console.log(`description : ${description}`);
}

ReactDOM.render(
    <App onSubmit={submit} />, 
    document.getElementById("root")
);