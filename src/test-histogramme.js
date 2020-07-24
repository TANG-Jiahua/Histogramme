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
            tooltip: {},
    
    
            xAxis: {
                data: ["Paris","Seine-et-Marne","Yveline","Essonnne","Hauts-de-Seine","Seine-Saint-Denis","Val-de-Marne","Val d'Oise"],
                
            },

            yAxis: {},
            series: [{
                name: 'Region',
                type: 'bar',
                data: nombre

            }]
        };
    }
    render(){
        const {nombre} = this.state;
        return(
            <Fragment>

            <div>
                    <ReactEcharts option={this.getOption(nombre)} />
            </div>

					<button onClick={this.handleClick}>Plus d'info</button>
            
            </Fragment>
        )
	}
	
	handleClick(){
		alert("Laver les mains")
	}
}


export default Histogramme