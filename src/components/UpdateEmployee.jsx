import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from './withRouter';
import { useParams } from 'react-router-dom';

class UpdateEmployee extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        //id:this.props.match.params.id,
        // id:'',
          firstName: '',
          lastName: '',
          emailId: ''
        };
    
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
        // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    }
    componentDidMount(){

    //     const searchParams = new URLSearchParams(this.props.location.search);
    // const id = searchParams.get('id');
    // this.setState({ id: id });
            // let { id } = useParams();
    //         const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');
    // this.setState({ id });



        EmployeeService.getEmployeeById(IdFunction.id).then((res) => {
            let emp = res.data;
            this.setState( { firstName : emp.firstName,
                lastName : emp.lastName,
                emailId : emp.emailId
            });
        });
    }
    
      updateEmployee = (e) => {
        e.preventDefault();
        let emp = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailId: this.state.emailId
        };
        console.log('emp = ', JSON.stringify(emp));
    
        // EmployeeService.addEmployee(emp).then((res) => {
        // //   this.history.push('/employees');
        // this.props.navigate('/employees');
        // });
     };
    
      changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
      };
    
      changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
      };
    
      changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
      };
    
      cancel = () => {
        this.props.navigate('/employees');
      };
    
      render() {
        const { firstName, lastName, emailId } = this.state;
    
        return (
          <div>
            <div className='container'>
              <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h3 className='text-center'>UPDATE EMPLOYEE</h3>
                  <div className='card-body'>
                    <form>
                      <div className='form-group'>
                        <label>FIRST NAME:</label>
                        <input
                          placeholder='First Name'
                          name='firstName'
                          className='form-control'
                          value={firstName}
                          onChange={this.changeFirstNameHandler}
                        />
                      </div>
                      <div className='form-group'>
                        <label>LAST NAME:</label>
                        <input
                          placeholder='Last Name'
                          name='lastName'
                          className='form-control'
                          value={lastName}
                          onChange={this.changeLastNameHandler}
                        />
                      </div>
                      <div className='form-group'>
                        <label>EMAIL ID:</label>
                        <input
                          placeholder='Email ID'
                          name='emailId'
                          className='form-control'
                          value={emailId}
                          onChange={this.changeEmailHandler}
                        />
                      </div>
                      <button className='btn btn-success' onClick={this.updateEmployee}>
                        Save
                      </button>
                      <button
                        className='btn btn-danger'
                        onClick={this.cancel}
                        style={{ marginLeft: '10px' }}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
 }

 const IdFunction = () => {
    const {id} = useParams();
    //const id = JSON.parse(params);
 }

export default withRouter(UpdateEmployee);