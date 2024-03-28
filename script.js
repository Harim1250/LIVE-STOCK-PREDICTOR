// StocksData: https://stocks3.onrender.com/api/stocks/getstocksdata
// CompanySummary :https://stocks3.onrender.com/api/stocks/getstocksprofiledata
// BookValue :https://stocks3.onrender.com/api/stocks/getstockstatsdata

let myChart;

// ========== All Companies Data ==========
fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
.then(result => {
    return result.json();
})
.then(data =>{

    console.log(data);
    const chart = document.getElementById('chart').getContext('2d');

    // create a new chart instance
    myChart = new Chart(chart , {
        type: 'line',
        data: {
            labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
            datasets: [
                {
                    label: "Amazon",
                    data: data.stocksData[0].AMZN['1y']['value'],
                    borderColor: 'yellow',
                    borderWidth: 2
                },
                {
                    label: "Google",
                    data: data.stocksData[0].GOOGL['1y']['value'],
                    borderColor: 'red',
                    borderWidth: 2
                },
                {
                    label: "JP Morgan",
                    data: data.stocksData[0].JPM['1y']['value'],
                    borderColor: 'green',
                    borderWidth: 2
                },
                {
                    label: "Paypal",
                    data: data.stocksData[0].PYPL['1y']['value'],
                    borderColor: 'blue',
                    borderWidth: 2
                },
                {
                    label: "Disney",
                    data: data.stocksData[0].DIS['1y']['value'],
                    borderColor: 'indigo',
                    borderWidth: 2
                },
            ]
        },
        options:{
            responsive:true
        }
    });
})

// ========== Specific Company Data ==========
// ----- Amazon Data -----
const Amazon = document.getElementById("amazon");
Amazon.addEventListener("click",()=>{
    fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
    .then(result => {
        return result.json();
    })
    .then(data =>{

        console.log(data);
        const chart = document.getElementById('chart').getContext('2d');
        if(myChart){
            myChart.destroy();
        }
        // create a new chart instance
        myChart = new Chart(chart , {
            type: 'line',
            data: {
                labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                datasets: [
                    {
                        label: "Amazon",
                        data: data.stocksData[0].AMZN['1y']['value'],
                        borderColor: 'yellow',
                        borderWidth: 2
                    }
                ]
            },
            options:{
                responsive:true
            }
        });
    })
})

// ----- Google Data -----
const Google = document.getElementById("google");
Google.addEventListener("click",()=>{
    fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
    .then(result => {
        return result.json();
    })
    .then(data =>{

        console.log(data);
        const chart = document.getElementById('chart').getContext('2d');
        if(myChart){
            myChart.destroy();
        }
        // create a new chart instance
        myChart = new Chart(chart , {
            type: 'line',
            data: {
                labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                datasets: [
                    {
                        label: "Google",
                        data: data.stocksData[0].GOOGL['1y']['value'],
                        borderColor: 'red',
                        borderWidth: 2
                    }
                ]
            },
            options:{
                responsive:true
            }
        });
    })
})

// ----- JP Morgan Data -----
const JPMorgan = document.getElementById("jpmorgan");
JPMorgan.addEventListener("click",()=>{
    fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
    .then(result => {
        return result.json();
    })
    .then(data =>{

        console.log(data);
        const chart = document.getElementById('chart').getContext('2d');
        if(myChart){
            myChart.destroy();
        }
        // create a new chart instance
        myChart = new Chart(chart , {
            type: 'line',
            data: {
                labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                datasets: [
                    {
                        label: "JP Morgan",
                        data: data.stocksData[0].JPM['1y']['value'],
                        borderColor: 'green',
                        borderWidth: 2
                    }
                ]
            },
            options:{
                responsive:true
            }
        });
    })
})

// ----- Paypal Data -----
const Paypal = document.getElementById("paypal");
Paypal.addEventListener("click",()=>{
    fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
    .then(result => {
        return result.json();
    })
    .then(data =>{

        console.log(data);
        const chart = document.getElementById('chart').getContext('2d');
        if(myChart){
            myChart.destroy();
        }
        // create a new chart instance
        myChart = new Chart(chart , {
            type: 'line',
            data: {
                labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                datasets: [
                    {
                        label: "Paypal",
                        data: data.stocksData[0].PYPL['1y']['value'],
                        borderColor: 'blue',
                        borderWidth: 2
                    }
                ]
            },
            options:{
                responsive:true
            }
        });
    })
})

// ----- Disney data -----
const Disney = document.getElementById("disney");
Disney.addEventListener("click",()=>{
    fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
    .then(result => {
        return result.json();
    })
    .then(data =>{

        console.log(data);
        const chart = document.getElementById('chart').getContext('2d');
        if(myChart){
            myChart.destroy();
        }
        // create a new chart instance
        myChart = new Chart(chart , {
            type: 'line',
            data: {
                labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                datasets: [
                    {
                        label: "Disney",
                        data: data.stocksData[0].DIS['1y']['value'],
                        borderColor: 'indigo',
                        borderWidth: 2
                    }
                ]
            },
            options:{
                responsive:true
            }
        });
    })
})

// ----- show all -----
const showAll = document.getElementById("show-all");
showAll.addEventListener("click",()=>{
    fetch('https://stocks3.onrender.com/api/stocks/getstocksdata')
    .then(result => {
        return result.json();
    })
    .then(data =>{

        console.log(data);
        const chart = document.getElementById('chart').getContext('2d');
        if(myChart){
            myChart.destroy();
        }
        // create a new chart instance
        myChart = new Chart(chart , {
            type: 'line',
            data: {
                labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                datasets: [
                    {
                        label: "Amazon",
                        data: data.stocksData[0].AMZN['1y']['value'],
                        borderColor: 'yellow',
                        borderWidth: 2
                    },
                    {
                        label: "Google",
                        data: data.stocksData[0].GOOGL['1y']['value'],
                        borderColor: 'red',
                        borderWidth: 2
                    },
                    {
                        label: "JP Morgan",
                        data: data.stocksData[0].JPM['1y']['value'],
                        borderColor: 'green',
                        borderWidth: 2
                    },
                    {
                        label: "Paypal",
                        data: data.stocksData[0].PYPL['1y']['value'],
                        borderColor: 'blue',
                        borderWidth: 2
                    },
                    {
                        label: "Disney",
                        data: data.stocksData[0].DIS['1y']['value'],
                        borderColor: 'indigo',
                        borderWidth: 2
                    },
                ]
            },
            options:{
                responsive:true
            }
        });
    })
})

//functioning og buttons when on a mobile device
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click',()=>{
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    sidebar.style.display = 'none';
})