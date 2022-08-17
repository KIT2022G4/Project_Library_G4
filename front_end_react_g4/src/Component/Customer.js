import React, {useState} from 'react'
import Customer from './Customer'
import EditCustomer from './EditCustomer'

function Customers({customers, onUpdateCustomer}) {

  const [isEditing, setIsEditing] = useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    fullname: "",
    email: "",
    phone: ""
  })


  function handleCustomerUpdate(updatedCustomer) {
      setIsEditing(false);
      onUpdateCustomer(updatedCustomer);
    }


  function handleChange(e) {
    setEditForm({
    ...editForm,
    [e.target.fullname]: e.target.value
    })
  }


  function changeEditState(customer) {
    if (customer.id === editForm.id) {
      setIsEditing(isEditing => !isEditing) 
    } else if (isEditing === false) {
      setIsEditing(isEditing => !isEditing) 
    }
  }


  function captureEdit(clickedCustomer) {
    let filtered = customers.filter(customer => customer.id === clickedCustomer.id)
    setEditForm(filtered[0])
  }

  return (
      <div>
        {isEditing?
          (<EditCustomer
            editForm={editForm}
            handleChange={handleChange}
            handleCustomerUpdate={handleCustomerUpdate}
          />) : null}
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Modify Customer</th>
            </tr>
          </thead>
          <tbody>
              { customers.map(customer =>
                <Customer
                  key={customer.id}
                  customer={customer}
                  captureEdit={captureEdit}
                  changeEditState={changeEditState}
                />) }
          </tbody>
        </table>
      </div>
   )
}
export default Customers