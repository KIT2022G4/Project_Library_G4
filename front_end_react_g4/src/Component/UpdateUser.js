import { useEffect, useState } from "react";
import './Customer.js';

function UpdateUser () {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/customers")
        .then(response => response.json())
        .then(data => setCustomers(data))
    }, []);

    function onUpdateUser (updatedUser) {
        const updatedUsers = customers.map(
            customer => {
                if (customer.id === updatedUser.id) {
                    return updatedUser;
                } else return customer;
            } 
        )
        setCustomers(updatedUsers);
    }

    return (

        <>
        <div>
            <Customer customers={customers}
            onUpdateCustomer={onUpdateUser}></Customer>

        </div>
            
        </>
    )
}

export default UpdateUser;