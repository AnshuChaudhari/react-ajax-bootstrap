import React, {Component} from "react";
import DataTableList from './DataTableList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableFlag: false
        };
    }

    toggleTable = () => {
        this.setState({
            tableFlag: true
        });
    };

    render() {

        return (
            <div>
                {!this.state.tableFlag ?
                    <form>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <input type="button" name="submit" value="Submit" onClick={this.toggleTable}/>
                    </form>

                    : null
                }

                {this.state.tableFlag ? <DataTableList data={this.state.data}/> : null}

            </div>
        );
    }
}


export default App;
