import React, {Component} from "react";
import DataTableList from '../DataTableList/DataTableList';
import './LoginApp.css';

class LoginApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableFlag: false,
            username: '',
            password: ''
        };
    }

    handleChange = (e) => {
        console.log("res");
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            tableFlag: true
        });
    };

    render() {
        const enabled =
            (this.state.username.length > 0 && this.state.password.length > 0);
        return (
            <div className="col-md-12">
                {!this.state.tableFlag ?
                    (
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <h2>Login</h2>
                        <div className="form-group">
                            <input
                                id="username"
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
                                id="password"
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group clearfix">
                            <button className="btn btn-primary" type="submit" name="submit"
                                    disabled={!enabled}>Submit
                            </button>
                        </div>
                    </form>
                    )
                    : <DataTableList data={this.state.data}/>
                }
            </div>
        );
    }
}


export default LoginApp;
