import React,{ Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class EditInspection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      status: '',
      comment: '',
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

    updateProfile = async () =>{
      let obj = {
          name: this.state.name,
          status: this.state.status,
          comment: this.state.comment
      }
      let id = this.props.id;
      try {
        let response = await fetch('http://localhost:88/api/item/'+ id, {
          credentials: 'include',
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)
        })
        let result = await response.json();
        console.log(result)
      }catch(err){
        console.log(err);
      }
    }
      
  render() {
    console.log('edit modal props', this.props)
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader style={{textAlign: 'center'}}>Edit the Inspection</ModalHeader>
          <ModalBody>
          <Form>
              <FormGroup>
                <Label>Item Name</Label>
                <Input
                  placeholder="name" 
                  onChange={(e)=> {this.setState({name:e.target.value})}}
                  name="name"
                  id="name"
                  defaultValue={this.props.name}
                />
              </FormGroup>
              <FormGroup>
                <Label>Status</Label>
                <Input
                  placeholder="passed or failed"
                  onChange={(e)=> {this.setState({status:e.target.value})}}
                  name="status"
                  id="status"
                  defaultValue={this.props.status}
                />
              </FormGroup>
              <FormGroup>
                <Label>Comment</Label>
                <Input
                  placeholder="Comment"
                  onChange={(e)=> {this.setState({comment:e.target.value})}}
                  name="comment"
                  id="comment"
                  defaultValue={this.props.comment}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={ this.updateProfile} href="/">Edit Item</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps= ({item}) => {
  return {
    item
  }
}
export default connect(mapStateToProps, actions) (EditInspection);