document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const logTableBody = document.getElementById('logTableBody');

    // Sample data
    const dummyData = [
        { name: "John Doe", status: "Customer", entry: "10:00 AM", exit: "10:30 AM", coffee: 2, lastActive: "10:30 AM" },
        { name: "Jane Smith", status: "Employee", entry: "9:00 AM", exit: "-", coffee: 0, lastActive: "10:15 AM" },
    ];

    // Render the table
    const renderTable = () => {
        logTableBody.innerHTML = dummyData
            .map(row => `
                <tr>
                    <td>${row.name}</td>
                    <td>${row.status}</td>
                    <td>${row.entry}</td>
                    <td>${row.exit}</td>
                    <td>${row.coffee}</td>
                    <td>${row.lastActive}</td>
                </tr>
            `)
            .join('');
    };

   
    startBtn.addEventListener('click', () => {
        alert("Monitoring started!");
    });

    stopBtn.addEventListener('click', () => {
        alert("Monitoring stopped!");
    });


    renderTable();
});
