var ctx = document.getElementById('block1');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01:00', '03:00', '05:00', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00'],
        datasets: [{
            label: 'Temp',
            data: [12, 11, 13, 16, 18, 22, 23, 22, 21, 18, 16, 14],
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 0.5,
            fill: true,
            radius: 0,
            hitRadius: 20

        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});