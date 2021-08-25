const inp = document.querySelector('#input1');
const btn = document.querySelector('.btn');
let a = [];


fetch('https://api.covid19api.com/summary')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        btn.onclick = () => {
            let value = inp.value;
            let c = data.Countries;

            for (key in c) {
                if (c[key].Slug == value.toLowerCase()) {
                    a.push(c[key].TotalConfirmed, c[key].TotalDeaths);
                    console.log(a);

                    var ctx = document.getElementById('myChart').getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['TotalConfirmed', 'TotalDeaths'],
                            datasets: [{
                                label: 'Covid statistic',
                                data: a,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }
                    });
                }
            }

        }
    })

