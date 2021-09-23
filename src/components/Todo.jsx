import React from "react";
import DisplayTodo from "./DisplayTodo";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./todo.css";
class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            item: window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem('items')) : [],
            name: '',
            sectionTitle: "Todo App in React js",
            edit: false
        }
    }
    handleTodoAdd = (e) => {
        e.preventDefault();
        if (this.state.name.trim() !== "") {
            console.log(this.state.name);
            const item = [...this.state.item, this.state.name];
            window.localStorage.setItem('items', JSON.stringify(item));
            this.setState({
                item: item,
                name: ''
            })
        } else
            alert('Please Fill Todo Name');
    }
    handleTodoInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    delete = (uni_key_id) => {
        // console.log(uni_key_id,"Deleted");
        let updatedItemd = this.state.item.filter((val, index) => {
            return uni_key_id !== index + val;
        });
        window.localStorage.setItem('items', JSON.stringify(updatedItemd))
        this.setState({ item: JSON.parse(window.localStorage.getItem('items')) });
    }
    edit = (id) => {
        this.setState({ edit: true });
        console.log(id, "edit");
        let editableItem = this.state.item.filter((val, index) => {
            return id === index + val;
        });
        // console.log(editableItem,"convert",JSON.stringify());
        this.setState({ name: editableItem.toString() });
        let removeeditableItem = this.state.item.filter((val, index) => {
            return id !== index + val;
        });
        window.localStorage.setItem('items', JSON.stringify(removeeditableItem))
        this.setState({ item: JSON.parse(window.localStorage.getItem('items')) });
    }
    removeAll = () => {
        window.localStorage.setItem('items', JSON.stringify([]));
        this.setState({ item: [] })
    }
    render() {
        return (
            <section className="todo">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center p-4" style={{ color: '#F7F0D4', fontSize: '25px', fontWeight: 'bold' }}>
                                {this.state.sectionTitle}
                            </div>
                        </div>
                        <div className="col-lg-4 m-auto">
                            <div className="row todo-container">
                                <div className="col-lg-12">
                                    <form onSubmit={this.handleTodoAdd}>
                                        <div className="custom-input-field">
                                            <input type="text" className="form-control" name="addtodo" value={this.state.name} onChange={this.handleTodoInput} autoComplete='off' required />
                                            <i className={this.state.edit ? 'fas fa-edit' : 'fas fa-plus'} onClick={this.handleTodoAdd} title="Add Todo"></i>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-12 mt-3">
                                        <DisplayTodo data={{ items: this.state.item, delete: this.delete, edit: this.edit }} />
                                    <p className="text-center btn btn-primary" onClick={this.removeAll}>Remove All</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Todo;