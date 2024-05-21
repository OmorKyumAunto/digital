document.addEventListener('DOMContentLoaded', function () {
    const employeeData = [
        { employeeId: '15107644', name: 'Omor Kyum Aunto', unitName: 'IT', assetName: 'Laptop', serialNo: 'SN12345', grnNo: 'GRN001', remarks: 'Active' },
        { employeeId: '15107191', name: 'MD Salim Reza Jim', unitName: 'IT', assetName: 'Laptop', serialNo: 'SN12346', grnNo: 'GRN002', remarks: 'Active' },
        { employeeId: '15107000', name: 'Kabir Hossain', unitName: 'HR', assetName: 'Desktop', serialNo: 'SN12347', grnNo: 'GRN003', remarks: 'Active' },
        { employeeId: '15108000', name: 'Rakiur Rahman', unitName: 'HR', assetName: 'Desktop', serialNo: 'SN12347', grnNo: 'GRN003', remarks: 'Active' },
        { employeeId: '15109000', name: 'XXX XXXXXX', unitName: 'XX', assetName: 'Accesories', serialNo: 'SN12347', grnNo: 'GRN003', remarks: 'Inactive' },
        // Add more data as needed
    ];

    const tableBody = document.querySelector('#employeeTable tbody');

    function populateTable(data) {
        tableBody.innerHTML = '';
        data.forEach(employee => {
            const row = document.createElement('tr');

            const cellEmployeeId = document.createElement('td');
            cellEmployeeId.textContent = employee.employeeId;
            row.appendChild(cellEmployeeId);

            const cellName = document.createElement('td');
            cellName.textContent = employee.name;
            row.appendChild(cellName);

            const cellUnitName = document.createElement('td');
            cellUnitName.textContent = employee.unitName;
            row.appendChild(cellUnitName);

            const cellAssetName = document.createElement('td');
            cellAssetName.textContent = employee.assetName;
            row.appendChild(cellAssetName);

            const cellSerialNo = document.createElement('td');
            cellSerialNo.textContent = employee.serialNo;
            row.appendChild(cellSerialNo);

            const cellGrnNo = document.createElement('td');
            cellGrnNo.textContent = employee.grnNo;
            row.appendChild(cellGrnNo);

            const cellRemarks = document.createElement('td');
            cellRemarks.textContent = employee.remarks;
            row.appendChild(cellRemarks);

            tableBody.appendChild(row);
        });
    }

    function filterTable() {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const filteredData = employeeData.filter(employee =>
            employee.employeeId.toLowerCase().includes(query) ||
            employee.serialNo.toLowerCase().includes(query)
        );
        populateTable(filteredData);
    }

    document.getElementById('searchInput').addEventListener('input', filterTable);

    // Initial population of the table
    populateTable(employeeData);
});
