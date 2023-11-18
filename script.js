let accessToken;

function authenticateUser() {
    const loginId = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login_id: loginId,
            password: password
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Authentication failed');
        }
        return response.json();
    })
    .then(data => {
        accessToken = data.token;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('customer-section').style.display = 'block';
    })
    .catch(error => {
        console.error('Authentication error:', error);
        alert('Authentication failed');
    });
}

function getCustomerList() {
    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Customer List:', data);
        // Handle customer list display here
    })
    .catch(error => {
        console.error('Error getting customer list:', error);
    });
}

function createCustomer() {
    const firstName = 'Jane';  // Replace with actual input
    const lastName = 'Doe';    // Replace with actual input

    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            // Include other customer data
        }),
    })
    .then(response => {
        if (response.status === 201) {
            console.log('Customer created successfully');
            // Handle success
        } else if (response.status === 400) {
            throw new Error('First Name or Last Name is missing');
        } else {
            throw new Error('Error creating customer');
        }
    })
    .catch(error => {
        console.error('Error creating customer:', error.message);
        // Handle error
    });
}

function deleteCustomer() {
    const uuid = '123';  // Replace with actual input

    fetch(`https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${uuid}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Customer deleted successfully');
            // Handle success
        } else if (response.status === 500) {
            throw new Error('Error Not deleted');
        } else if (response.status === 400) {
            throw new Error('UUID not found');
        } else {
            throw new Error('Unknown error');
        }
    })
    .catch(error => {
        console.error('Error deleting customer:', error.message);
        // Handle error
    });
}

function updateCustomer() {
    const uuid = '123';  // Replace with actual input
    const updatedData = {
        "first_name": "Jane",
        "last_name": "Doe",
        "street": "Elvnu Street",
        "address": "H no 2 ",
        "city": "Delhi",
        "state": "Delhi",
        "email": "sam@gmail.com",
        "phone": "12345678"
    };

    fetch(`https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=${uuid}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Customer updated successfully');
            // Handle success
        } else if (response.status === 500) {
            throw new Error('UUID not found');
        } else if (response.status === 400) {
            throw new Error('Body is Empty');
        } else {
            throw new Error('Unknown error');
        }
    })
    .catch(error => {
        console.error('Error updating customer:', error.message);
        // Handle error
    });
}

function logout() {
    accessToken = null;
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('customer-section').style.display = 'none';
}
