
import Chart from 'chart.js/auto';
import L from 'leaflet';

// Example: Bar Chart
function renderBarChart(scores) {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Green Spaces', 'Safety', 'Education', 'Healthcare', 'Play Areas', 'Community Support'],
            datasets: [
                {
                    label: 'Scores',
                    data: scores,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        },
    });
}

// Example: Map
function renderMap(lat, lng) {
    const map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
}

// Example Usage
renderBarChart([85, 75, 90, 88, 80, 95]); // Replace with dynamic data
renderMap(40.7128, -74.0060); // Replace with dynamic data
