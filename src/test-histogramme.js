import React, { Component,Fragment } from 'react'
import ReactEcharts from 'echarts-for-react';

class Histogramme extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre:[373, 201, 331, 282, 586, 580, 484, 259],
        }
    }
    
    getOption = (nombre) =>{
        return {
            title: {
                text: 'ECharts Histogramme'
            },
    
            xAxis: {
                data: ["Paris 75","Seine-et-Marne 77","Yveline 78","Essonnne 91","Hauts-de-Seine 92","Seine-Saint-Denis 93","Val-de-Marne 94","Val d'Oise 95"]
            },
            yAxis: {},
            series: [{
                name: 'Region',
                type: 'bar',
                data: nombre
            }
		]
        };
    }
    render(){
        const {nombre} = this.state;
        return(
            <div>
                    <ReactEcharts option={this.getOption(nombre)} />
					<button	onClick={this.handleClick}>Plus d'info</button>
            </div>
        )
	}
	
	handleClick(){
		alert("1PRÉVENTIONRestez chez vous")
	}
}


export default Histogramme