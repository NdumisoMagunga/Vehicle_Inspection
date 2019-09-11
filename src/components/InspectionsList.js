import React, { Component } from 'react';
import { Table, Row, Button, Col } from "reactstrap";
import _ from 'lodash'
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

import EditInspection from './EditInspection';
import AddItem from './AddItem';

class InspectionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(id){
        this.props.fetchInspection();
        this.props.fetchItem();
        this.props.fetchVehicle();
        this.props.fetchUser()
    }

    deleteInspection = async (id) => {
        try {
            let response = await fetch('http://localhost:88/api/item/'+ id, {
              credentials: 'include',
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify()
            })
            let result = await response.json();
            console.log(result)
          }catch(err){
            console.log(err);
          }
    }
    
    renderTableView() {
        return (
            <div className="container">
                {this.props.vehicle.map((veg, index) => {
                        return <h4 style={{ textAlign: 'center' }} key={index}>InspectionReg# {veg.reg}</h4>
                    })
                }
                <div scope='column'>
                {this.props.inspections.map((inspect, index) => {
                    return(
                        <Row key={index}>
                        <Col><h4 style={{ textAlign: 'left' }}>Date:</h4></Col>
                        <Col><h4 style={{ textAlign: 'right' }}>Inspected By {inspect.inspectorName} {inspect.inspectorLastName}</h4></Col>
                    </Row>
                    )
                })}   
                </div>
                <Table>
                    <thead>
                        <tr></tr>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Passed</th>
                            <th>Failed</th>
                            <th>Comment</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((i, index) => (
                            i._id ? 
                            <tr key={index}>
                                <th scope="row">{i.index}</th>
                                <td>{i.name}</td>
                                <td>{i.status === "Yes" ? ("x") : null}</td>
                                <td>{i.status === "No" ? ("x") : null}</td>
                                <td>{i.comment}</td>
                                <td scope="column">
                                    <Row>
                                        <Col xs="3">
                                            <EditInspection
                                                buttonLabel="Edit"
                                                comment={i.comment}
                                                name={i.name}
                                                status={i.status}
                                                id ={i._id}
                                                item = {this.props.item}
                                            />
                                        </Col>
                                        <Col xs="3">
                                            <Button color="danger"
                                                onClick={() => this.deleteInspection(i._id)}
                                                href="/"
                                            >
                                                Delete
                                            </Button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr> : <tr key={index}></tr>
                        ))}
                    </tbody>
                </Table>
                <Row>
                    <Col xs="3"><AddItem buttonLabel="Add Item" /></Col>
                </Row>
            </div>
        )
    }
    render() {
        console.log(this.props);
        return (
            <div>{this.renderTableView()}</div>
        )
    }
}

const mapStateToProps = ({inspections, items, vehicle, user }) => {
	return {
        inspections, items,vehicle, user
	}
}

export default connect(mapStateToProps, actions) (InspectionList);
