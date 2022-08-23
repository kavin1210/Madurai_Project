import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            data: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({data: res.data});
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        const { data } = this.state;
        return (
            <div>

            {Array.isArray(data) && data.map(object => (
                <div>
                    <br></br>
                    <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { object.firstname }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { object.lastname }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { object.email }</div>
                        </div>
                        <div className="row">
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </div>
                    </div>

                </div>
                </div>
            ))}


                
            </div>
        )
    }
}

export default ViewEmployeeComponent
