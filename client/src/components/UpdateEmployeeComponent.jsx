import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            location : '',
            dob : '',
            education : ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeEducationHandler = this.changeEducationHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            this.setState({
                firstName: res.data[0].First_Name,
                lastName: res.data[0].Last_Name,
                emailId : res.data[0].Email,
                location : res.data[0].Location,
                dob : res.data[0].DOB,
                education : res.data[0].Education
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            id:this.state.id, 
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId,
            location : this.state.location,
            dob : this.state.dob,
            education : this.state.education

        };
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee).then( res => {
            this.props.history.push('/employees');
        });
        alert("Updated Successfully");
        window.location.href="/";
    
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

 
    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    changeEducationHandler= (event) => {
        this.setState({education: event.target.value});
    }



    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                {Array.isArray(data) && data.map(object => (                    
                <form>
                <div className = "form-group">
                    <label> First Name: </label>
                    <input type="text" name="id" className="form-control" value={object.id} onLoad={this.changeid} />
                    <input type="text" placeholder="First Name" name="firstName" className="form-control" 
                        value={object.firstname} onChange={this.changeFirstNameHandler}/>
                </div>
                <div className = "form-group">
                    <label> Last Name: </label>
                    <input placeholder="Last Name" name="lastName" className="form-control" 
                        value={object.lastname} onChange={this.changeLastNameHandler}/>
                </div>
                <div className = "form-group">
                    <label> Location : </label>
                    <input placeholder="Location" name="location" className="form-control" 
                        value={object.location} onChange={this.changeLocationHandler}/>
                </div>
                <div className = "form-group">
                    <label> Email Id: </label>
                    <input placeholder="Email Address" name="emailId" className="form-control" 
                        value={object.email} onChange={this.changeEmailHandler}/>
                </div>
                <div className = "form-group">
                    <label> Date of Birth : </label>
                    <input type='date' placeholder="" name="dob" className="form-control" 
                        value={object.dob} onChange={this.changeDobHandler}/>
                </div>
                <div className = "form-group">
                    <label>  </label>
                    <input placeholder="Education" name="education" className="form-control" 
                        value={object.education} onChange={this.changeEducationHandler}/>
                </div>

                <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>
            ))} 
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of Birth : </label>
                                            <input type='date' placeholder="" name="dob" className="form-control" 
                                                value={this.state.dob} onChange={this.changeDobHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Education : </label>
                                            <input placeholder="education" name="education" className="form-control" 
                                                value={this.state.education} onChange={this.changeEducationHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
