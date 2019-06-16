import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет!", sender: "me" }, { text: "Как дела?", sender: "me" }],
        input: ''
    };

    handleClick = () => {
        if (this.state.input.length > 0) {
            this.setState({
                messages: [...this.state.messages, { text: this.state.input, sender: 'me' }],
                input: ''
            });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(this.answer, 500);
        }
    }

    answer = () => {
        this.setState({ messages: [...this.state.messages, { text: 'Здравствуй друг!', sender: 'bot' }] });
    }

    handleType = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.handleClick();
        }
    }

    render() {
        const messageElements = this.state.messages.map((msgObj, index) => (
            <Message key={index} text={msgObj.text} sender={ msgObj.sender }/>));

        return <div>
            {messageElements}
            <TextField name="input" 
                value={this.state.input}
                onChange={this.handleType}
                onKeyDown={this.handleKeyDown}
                hintText="Напишите сообщение" />
            <FloatingActionButton onClick={this.handleClick}>
                <SendIcon />
            </FloatingActionButton>
        </div>
    }
}
