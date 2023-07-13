import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { browserHistory } from 'react-router';
import { withRouter } from './withRouter';

class EmployeeListComp extends Component {

    constructor(props){
        super(props);

        this.state = {
            employee : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) =>{
            this.setState({ employee : res.data })
        })
    }

    addEmployee(){
        // this.context.history.push('/addemployee')
        this.props.navigate('/addemployee')
    }

    editEmployee(id){
        this.props.navigate(`/updateemployee/${id}`);
    }
    
      

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row' >
                    <button className='btn btn-primary btn-fit-content' onClick={ this.addEmployee }> ADD EMPLOYEE </button>
                </div>
                <div className='row'>
                        <table className='table table-striped table-bordered'>

                                <thead>
                                    <tr>
                                        <th> Employee First Name</th>
                                        <th> Employee Last Name</th>
                                        <th> Employee Email id</th>
                                        <th> Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employee.map(
                                            employee => 
                                                <tr key={ employee.id }>
                                                    <td> { employee.firstName } </td>
                                                    <td> { employee.lastName } </td>
                                                    <td> { employee.emailId } </td>
                                                    <td>
                                                        <button onClick={() => this.editEmployee(employee.id)}  className='btn btn-info'>
                                                                Update
                                                        </button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                        </table>

                </div>
            </div>
        );
    }
}

export default withRouter(EmployeeListComp);