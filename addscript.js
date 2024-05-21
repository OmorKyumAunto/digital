document.getElementById('assetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const assetName = document.getElementById('assetName').value;
    const assetType = document.getElementById('assetType').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const value = document.getElementById('value').value;
    const grnno= document.getElementById('grnNo').value;
    const assigned=document.getElementById('assigned').value;

    const assetTableBody = document.getElementById('assetTableBody');
    const newRow = assetTableBody.insertRow();

    newRow.innerHTML = `
        <td>${assetName}</td>
        <td>${assetType}</td>
        <td>${purchaseDate}</td>
        <td>${serialno}</td>
        <td>${grnno}</td>
        <td>${assigned}</td>
        <td>${value}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    document.getElementById('assetForm').reset();

    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        assetTableBody.removeChild(newRow);
    });
});
