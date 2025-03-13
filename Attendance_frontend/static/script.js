document.addEventListener('DOMContentLoaded', () => {
    const attendanceBody = document.getElementById('attendance-body');

    document.querySelectorAll('.period-btn').forEach(button => {
        button.addEventListener('click', () => {
            const period = button.getAttribute('data-period');
            fetch('/get_attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ period: period })
            })
                .then(response => response.json())
                .then(data => {
                    attendanceBody.innerHTML = '';
                    data.forEach(row => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `<td>${row.no}</td><td>${row.name}</td><td>${row.register_number}</td>`;
                        attendanceBody.appendChild(tr);
                    });
                });
        });
    });
});
