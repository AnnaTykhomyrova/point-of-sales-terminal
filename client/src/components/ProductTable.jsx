import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';

export default class ProductTable extends Component {
    render() {
        const { products } = this.props;
        var sum = products;
        sum = sum.reduce( function(cnt,o){ return cnt + Number(o.total_price); }, 0)
        let qtySum = products;
        qtySum = qtySum.reduce( function(cnt,o){ return cnt + Number(o.qty); }, 0)
        return (
            <div className="products-table-container">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Credit limit</th>
                        <th>Order ID</th>
                        <th>Product name</th>
                        <th>Price per item</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>                    
                    {products.map((product, i) => {
                        return  (  
                            <tr key={'product' + product.id}>     
                                <td>{product.credit_limit}</td>              
                                <td>{product.order_id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                                {Number(product.total_price) > Number(product.credit_limit) ? 
                                    <td style={{color: 'red'}}>
                                        {product.total_price}
                                    </td> 
                                    : 
                                    <td style={{color: "green"}}>
                                        {product.total_price}
                                    </td>
                                }
                            </tr>  
                        )
                    })}                                  
                    </tbody>
                    <tbody>   
                        <tr>    
                            <td></td>               
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{qtySum}</td>
                            <td>{sum}</td>
                        </tr>  
                    </tbody>  
                </Table>        
            </div>
        )
    }
}