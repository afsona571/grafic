
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const dataValues = [12, 19, 3, 5, 2, 3];

    // Bar Chart
    new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Bar Chart',
          data: dataValues,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    // Line Chart
    new Chart(document.getElementById('lineChart'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Line Chart',
          data: dataValues,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.3)',
          tension: 0.4
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    // Pie Chart
    new Chart(document.getElementById('pieChart'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Pie Chart',
          data: dataValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)'
          ]
        }]
      }
    });

    // Radar Chart
    new Chart(document.getElementById('radarChart'), {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Radar Chart',
          data: dataValues,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)'
        }]
      }
    });

    // Horizontal Bar Chart (using 'bar' with indexAxis: 'y')
    new Chart(document.getElementById('horizontalBarChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Horizontal Bar',
          data: dataValues,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgb(153, 102, 255)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: { beginAtZero: true }
        }
      }
    });

