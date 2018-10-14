import React, {Component} from "react";
import DataTableList from './DataTableList';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableFlag: false,
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleTable = () => {
        this.setState({
            tableFlag: true
        });
    };

    render() {
        const enabled =
            this.state.username.length > 0 &&
            this.state.password.length > 0;
        return (
            <div className="col-md-12">
                {!this.state.tableFlag ?
                    <form className="login-form">
                        <h2>Login</h2>
                        <p>{this.state.error}</p>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={this.state.username}
                                placeholder="Enter Username"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={this.state.password}
                                placeholder="Enter Password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group clearfix">
                            <button className="btn btn-primary" type="submit" name="submit" onClick={this.toggleTable}
                                    disabled={!enabled}>Submit
                            </button>
                        </div>
                    </form>

                    : null
                }

                {this.state.tableFlag ? <DataTableList data={this.state.data}/> : null}

            </div>
        );
    }
}


export default App;
