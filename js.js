fetch('json.json')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            console.log(element);
        });
    })
    .catch(error => {
        console.error(error);
    });


fetch('json.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <p>${getTotalOrders(json)}</p>
            <p>${getTotalOrderCost(json)}</p>
            <p>${getShippedOrders(json)}</p>
        `;
    })
    .catch(error => {
        console.error(error);
    });

function getTotalOrders(json) {
    return `Total number of orders: ${json.length}`;
}

function getTotalOrderCost(json) {
    const totalCost = json.reduce((sum, order) => sum + order.ordercost, 0);
    return `Total order cost: $${totalCost}`;
}

function getShippedOrders(json) {
    const shippedCount = json.filter(order => order.shipped).length;
    return `Number of shipped orders: ${shippedCount}`;
}
