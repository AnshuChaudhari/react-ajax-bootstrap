import React, {Component} from "react";
import axios from "axios";
import DataTableList from './DataTableList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tableFlag: false
        };
    }

    componentDidMount() {
        let proxyUrl = "https://cors-anywhere.herokuapp.com/",
            targetUrl = "https://istheapplestoredown.com/api/v1/status/worldwide";

        axios
            .get(proxyUrl + targetUrl)
            .then(response => {
                let responseArray = [];

                let obj = response.data;
                //console.log(obj);
                for (let prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        //console.log(prop, obj[prop].name);
                        let infoObject = {
                            countryCode: prop,
                            countryName: obj[prop].name,
                            countryStatus: obj[prop].status
                        };
                        responseArray.push(infoObject);
                    }
                }
                console.log(responseArray);
                this.setState({
                    data: responseArray
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    toggleShow = () => {
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
                            //value={username}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            //value={lname}
                        />
                        <input type="button" name="submit" value="Submit" onClick={this.toggleShow}/>
                    </form>

                    : null
                }

                {this.state.tableFlag ? <DataTableList data={this.state.data}/> : null}

            </div>
        );
    }
}




export default App;
