import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class SalesOrdersForm extends Component { 
    submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
          name: e.target.elements['name'].value,
          price: e.target.elements['price'].value,
          qty: e.target.elements['qty'].value,
        }
        this.props.onSubmit(newProduct)
    }

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                    <Form.Group>
                        <Form.Label>
                            Product name
                        </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Product name" 
                            name="name"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Price
                        </Form.Label>
                        <Form.Control 
                            type="money"   
                            placeholder="Price" 
                            name="price"
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>
                            Qty
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Qty"
                            name="qty"
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
        )
    }
}