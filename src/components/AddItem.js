import React,{ Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label } from 'reactstrap';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: null,
      status: null,
      comment: null,
    };

    this.toggle = this.toggle.bind(this);
  }

  onSubmitItem = (e) => {
      e.preventDefault();
      const obj = {
          name: this.state.name,
          status: this.state.status,
          comment: this.state.comment
      }
      console.log('the add obj', obj);
      fetch('http://localhost:88/api/item', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj)
      })
  }
  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader style={{textAlign: 'center'}}>Add Item</ModalHeader>
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
            <Button color="success" onClick={this.onSubmitItem} href="/">Add Item</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddItem;