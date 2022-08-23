import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

   

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            alert("Are You Sure You Want To Delete");
            window.location.reload();
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    /*editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }*/
    
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);  
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div className='p-5'>
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Student management system</h2>
        </div><br/><br/><br/>
        <div class="col-md-6">
            <input className='form-control' type="search" placeholder="Search"/>
        </div>
        <div class="col-md-5"></div>
        <div class="col-md-1">
          <button className='btn btn-light btn-outline-dark rounded' onClick={this.addEmployee}>Add</button>
        </div>
  </div>
  </div><br/><br/><br/>

    <div class='container'>
      <div className='row'>
        <div className='col-md-12'>
        <table class="table table-striped table-bordered text-center table-hover">
      <thead>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Education</th>
          <th>Action</th>
          <th>Delete</th>
      </tr>
      </thead>
      <tbody>
        {
         this.state.employees.map(
          employee => 
            <tr key = { employee.id }>
                <td> { employee.First_Name } </td>   
                <td> { employee.Last_Name } </td>
                <td> { employee.Location } </td>
                <td> { employee.Email } </td>
                <td> { employee.DOB } </td>
                <td> { employee.Education } </td>
                <td>                           
                    <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-danger">Update </button>
                </td>
                <td>                              
                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-primary">Delete </button>
                </td>
                
            </tr>
                                    )
                                }
      </tbody>
    
        </table>
        </div>
      </div>
    </div>
    </div>

            
        )
    }
}

export default ListEmployeeComponent
