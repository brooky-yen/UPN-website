$(function(){
    var employeeElement = document.getElementById('employee');
    var officeareaElement = document.getElementById('officearea');

    var employeeOption = {
            title : {
            },
            tooltip: {
                show: 'axis'
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['2012/8','2013/6','2014/1','2014/6','2015/1'],
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    'name': '夥伴人數',
                    'type': 'line',
                    'data': [3, 4, 7, 17, 27]
                }
            ]
        };

        var officeareaOption = {
            title: {
            },
            tooltip: {
                show: 'axis'
            },
            grid: {
                borderColor: '#fff'
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['2012/8','2013/2','2014/5','2014/9','2014/10', '2015/2'],
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    'name': '辦公室坪數',
                    'type': 'line',
                    'data': [7, 30, 40, 70, 100, 170]
                }
            ]
        };

    var employeeChart = echarts.init(employeeElement, 'dark');
    var officeareaChart = echarts.init(officeareaElement, 'dark');

    employeeChart.setOption(employeeOption);
    officeareaChart.setOption(officeareaOption);

    window.onresize = function() {
        employeeChart.resize();
        officeareaChart.resize();
    }
});
