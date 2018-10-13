import React, { Component } from "react";
import axios from "axios/index";


class DataTableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {

        //The origin does not support cors, so we need to pass it through a proxyURL which makes it cors compatible
        let proxyUrl = "https://cors-anywhere.herokuapp.com/",
            targetUrl = "https://istheapplestoredown.com/api/v1/status/worldwide";

        axios
            .get(proxyUrl + targetUrl)
            .then(response => {
                let responseArray = [];
                let obj = response.data;
                for (let prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        let infoObject = {
                            countryCode: prop,
                            countryName: obj[prop].name,
                            countryStatus: obj[prop].status
                        };
                        responseArray.push(infoObject);
                    }
                }
                this.setState({
                    data: responseArray
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        return (
           <div className="container">
                <div className="row">
                    <div>
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <td>Country Code</td>
                                <td>Country Name</td>
                                <td>Store Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((object, index) =>
                                <tr key={index}>
                                    <td>{object.countryCode}</td>
                                    <td>{object.countryName}</td>
                                    <td>{object.countryStatus}</td>
                                </tr>
                            )}

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default DataTableList;