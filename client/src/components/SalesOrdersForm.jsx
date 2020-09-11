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
            order_id: e.target.elements['order_id'].value,
            total_price: Number(e.target.elements['price'].value) * Number(e.target.elements['qty'].value),
            credit_limit: Number(e.target.elements['credit_limit'].value),
        }
        this.props.onSubmit(newProduct)
        e.target.elements['name'].value = '';
        e.target.elements['price'].value = '';
        e.target.elements['qty'].value = '';
        
    }

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                    <Form.Group>                        
                        <Form.Control 
                            required
                            type="number" 
                            placeholder="Credit limit" 
                            name="credit_limit"
                            min={1}
                        />
                    </Form.Group>
                    <Form.Group>                        
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Oredr ID" 
                            name="order_id"
                            minLength={4}
                        />                       
                    </Form.Group>
                    <Form.Group>                        
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Product name" 
                            name="name"
                            minLength={2}
                        />                        
                    </Form.Group>
                    <Form.Group>                        
                        <Form.Control
                            required 
                            type="number"   
                            placeholder="Price" 
                            name="price"
                            min={1}
                        />                        
                    </Form.Group>                    
                    <Form.Group>                         
                        <Form.Control 
                            required
                            type="number" 
                            placeholder="Qty"
                            name="qty"
                            min={1}
                        />                        
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                    >
                        Create product
                    </Button>
                </Form>
        )
    }
}