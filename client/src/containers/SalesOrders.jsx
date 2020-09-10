import React, { Component } from 'react';
import SalesOrdersForm from "../components/SalesOrdersForm";

export default class SalesOrders extends Component {  
    newProductHandler = (data) =>{
        //set data to be sent to db in newProduct
        const newProduct = {
            name: data.name,
            price: data.price,
            qty: data.qty        
        }

        fetch("http://localhost:8080/products", {
            method: 'POST',
            body: JSON.stringify(newProduct), 
            headers: {"Content-Type": "application/json"}
        })
        .then((response) => 
            console.log(response)
        )
        .catch((err) => console.log('error' + err))
    }

    render() {         
        return (                                     
            <div className="sales-orders-container">
                <SalesOrdersForm
                    onSubmit={(data) => {
                        this.newProductHandler(data)
                    }} 
                />
            </div>
        )
    }
}