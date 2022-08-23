import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
// import swal from '@sweetalert/with-react'

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            location:'',
            emailId: '',
            dob:'',
            education:'',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeEducationHandler = this.changeEducationHandler.bind(this);
        this.save = this.save.bind(this);
    }

    // step 3
    componentDidMount(){
        

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({
                    firstName: employee.firstname,
                    lastName: employee.lastname,
                    location : employee.location,
                    emailId : employee.email,
                    dob : employee.dob,
                    education : employee.education
                });
                this.setState({data:res.data});
            });
        }        
    }

    save = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName, 
            emailId: this.state.emailId,
            location : this.state.location,
            dob : this.state.dob,
            education : this.state.education

            };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
        alert("Submit Successfully");
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add New Student</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    getContent(){
        
        if(this.state.id === '_add'){
            return <form>
            <div className = "form-group">
                <label> First Name: </label>
                <input placeholder="First Name" name="firstName" className="form-control" 
                    onChange={this.changeFirstNameHandler}/>
            </div>
            <div className = "form-group">
                <label> Last Name: </label>
                <input placeholder="Last Name" name="lastName" className="form-control" 
                     onChange={this.changeLastNameHandler}/>
            </div>
            <div className = "form-group">
                <label> Location: </label>
                <input placeholder="Location" name="location" className="form-control" 
                     onChange={this.changeLocationHandler}/>
            </div>
            <div className = "form-group">
                <label> Email Id: </label>
                <input placeholder="Email Address" name="emailId" className="form-control" 
                     onChange={this.changeEmailHandler}/>
            </div>
            <div className = "form-group">
                <label> DOB: </label>
                <input type="date" placeholder="Date Of Birth" name="dob" className="form-control" 
                     onChange={this.changeDobHandler}/>
            </div>
            <div className = "form-group">
                <label> Education: </label>
                <input placeholder="Education" name="education" className="form-control" 
                     onChange={this.changeEducationHandler}/>
            </div>

            <button className="btn-info btn" onClick={this.save}>Submite</button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
        </form>
        }
    }

    render() {
        
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 ">
                                    <h3 className="text-center">Add New Student</h3>
                                <div className = "card-body">
						{this.getContent()};
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
