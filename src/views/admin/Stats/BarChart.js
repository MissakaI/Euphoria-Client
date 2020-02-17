import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Container} from 'react-bootstrap';
class BarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }
  componentDidMount() {
    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    console.log("time");
    return (
      <Container>

        <div className="chart">
            <Bar
            data={this.state.chartData}
            options={{
                title:{
                display:this.props.displayTitle,
                text:this.props.title,
                fontSize:25
                },
                legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
                },
                scales: {
                  yAxes: [{
                      ticks: {
                          min: 0
                          
                      }
                  }]
                }
            }}
            />
        </div>
      </Container>
    )
  }
}

export default BarChart;