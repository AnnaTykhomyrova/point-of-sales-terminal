import React, { Component } from 'react';
import SalesOrdersForm from "../components/SalesOrdersForm";
import ProductTable from '../components/ProductTable';
import "../styles/SalesOrders.scss";

export default class SalesOrders extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            allProducts: []
        }
    };

    newProductHandler = (data) =>{
        //set data to be sent to db in newProduct
        const newProduct = {
            name: data.name,
            price: data.price,
            qty: data.qty,
            order_id: data.order_id,
            total_price: data.qty * data.price,
            credit_limit: data.credit_limit
        }

        fetch("http://localhost:8080/", {
            method: 'POST',            
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProduct), 
        })
        .then((response) => {
            console.log(response)   
        }
        )
        .catch((err) => console.log('error' + err))

        fetch('http://localhost:8080/')
        .then(res => res.json())
        .then(res => {
            this.setState({ 
                allProducts: res.allProducts
            })
        })
        .catch(err => {
            console.log('This is error' + err )
        })
    }
    
    render() {    
        const { allProducts } = this.state;  
        return (                                     
            <div className="sales-orders-container">
                <h2>Welcome to Point of Sales terminal!</h2>
                <SalesOrdersForm
                    onSubmit={(data) => {
                        this.newProductHandler(data)
                    }} 
                />
                {allProducts.length !== 0 &&                      
                    <ProductTable
                        products={allProducts}
                    />                   
                }
            </div>
        )
    }
}