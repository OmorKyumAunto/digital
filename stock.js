document.addEventListener('DOMContentLoaded', () => {
    const assets = [
        { category: 'Laptop', name: 'Dell XPS 13', serialNo: 'D123456789', grnNo: 'GRN001', specs: '8GB RAM, 256GB SSD, Intel i5', remarks: 'Assigned' },
        { category: 'Desktop', name: 'HP EliteDesk 800', serialNo: 'H987654321', grnNo: 'GRN002', specs: '16GB RAM, 512GB SSD, Intel i7', remarks: 'Assigened' },
        { category: 'Printer', name: 'HP LaserJet Pro', serialNo: 'P123456789', grnNo: 'GRN003', specs: 'Laser, Monochrome', remarks: 'Running' },
        { category: 'Accessory', name: 'Monitor', serialNo: 'BGH7654321', grnNo: 'GRN004', specs: 'Monitor HDMI', remarks: 'In Stock' },
        { category: 'Accessory', name: 'Logitech Mouse', serialNo: 'L987654321', grnNo: 'GRN005', specs: 'Wireless, Optical', remarks: 'In Stock' },
        // Add more assets as needed
    ];

    const tableBody = document.querySelector('#asset-table tbody');

    function populateTable(filteredAssets) {
        tableBody.innerHTML = '';
        filteredAssets.forEach(asset => {
            const row = document.createElement('tr');

            for (const property in asset) {
                const cell = document.createElement('td');
                cell.textContent = asset[property];
                row.appendChild(cell);
            }

            tableBody.appendChild(row);
        });
    }

    populateTable(assets);

    const searchInput = document.querySelector('#search-input');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAssets = assets.filter(asset =>
            asset.serialNo.toLowerCase().includes(searchTerm) ||
            asset.grnNo.toLowerCase().includes(searchTerm)
        );
        populateTable(filteredAssets);
    });


    document.getElementById('print-table').addEventListener('click', () => {
        window.print();
    });

    document.getElementById('export-excel').addEventListener('click', () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.table_to_sheet(document.getElementById('asset-table'));
        XLSX.utils.book_append_sheet(wb, ws, 'IT Asset Stock Table');
        XLSX.writeFile(wb, 'IT_Asset_Stock_Table.xlsx');
    });



    
});
