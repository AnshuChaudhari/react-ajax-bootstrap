import React from "react";

const DataTableList = (props) => (

    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <td>Country Code</td>
                        <td>Country Name</td>
                        <td>Store Status</td>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((object, index) =>
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
);

export default DataTableList;