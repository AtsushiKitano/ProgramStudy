import React, {Component} from 'react';

class TodoInput extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addTodo('新規Todo');
    }

    render(){
        return(
                <div>
                <input placeholder="新規TODOを入力してください。" />
                <button>登録</button>
                </div>
        );
    }
}

export default TodoInput;
