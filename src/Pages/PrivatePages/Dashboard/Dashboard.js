import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row, Col, Card, Calendar } from 'antd'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import day from '../../../Assets/Images/day.jpg'
import { getRouteWiseAssignedVehicleCountDetailsApi } from '../../../Services/ReportService';
import moment from 'moment'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {

  const [dummydatalabel, setDummydatalabel] = useState([]);
  const [newData, setNewData] = useState([]);
  const [RouteWiseAssignedVehicleDetail, setRouteWiseAssignedVehicleDetail] = useState();
  const [CDate, setCDate] = useState(moment().format("YYYY-MM-DD"));
  const onPanelChange = (value, mode) => {

  };

  const data = {
    labels: dummydatalabel,
    datasets: [{
      labels: "potato",
      data: newData,
      backgroundColor: [
        '#aa62b3',
        '#76c9a5',
        '#dd5e54',
        '#8abe6b',
        '#c4bd43',
        '#b0ca58',
      ],
      hoverOffset: 4,
      borderWidth: 3,
      borderColor: '#f0ecec'

    }]
  };

  useEffect(() => {

    let data = {
      routeDate: CDate,
      companyId: 1
    }
    getRouteWiseAssignedVehicleCountDetailsApi(data, (res) => {
      // console.log('Response', res.RoutewiseAssignedVehicle);
      if (res?.RoutewiseAssignedVehicle.length > 0) {
        // setRouteWiseAssignedVehicleDetail(res.RoutewiseAssignedVehicle);

        let names = res.RoutewiseAssignedVehicle.map(e => e.Route);
        setDummydatalabel(names);

        let mar = res.RoutewiseAssignedVehicle.map(e => e.VehicleCount);
        setNewData(mar);

      }
    })
  }, [])
  // console.log("vehicle details", RouteWiseAssignedVehicleDetail);

  const onSelectDate = (e) => {
    let data = {
      routeDate: e.format("YYYY-MM-DD"),
      companyId: 1
    }
    // console.log('data', data)
    // return
    getRouteWiseAssignedVehicleCountDetailsApi(data, (res) => {
      // console.log('Response', res.RoutewiseAssignedVehicle);
      if (res?.RoutewiseAssignedVehicle.length > 0) {
        // setRouteWiseAssignedVehicleDetail(res.RoutewiseAssignedVehicle);

        let names = res.RoutewiseAssignedVehicle.map(e => e.Route);
        setDummydatalabel(names);

        let mar = res.RoutewiseAssignedVehicle.map(e => e.VehicleCount);
        setNewData(mar);

      }
    })
  }
  return (
    <div className="contentContainer">
      <MainContainer>
        <Row>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Card span={24}>
                  <Doughnut data={data} />
                </Card>
              </Col>
              <Col span={12}>
                <Card span={24}>
                <Pie data={data} />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card span={24}>
                  <Bar data={data} />
                </Card>
              </Col>

            </Row>
          </Col>

          <Col span={8}>
            <GreeetingCard>
              <div className="GlassContainer">
                <h1>Welcome Back</h1>
                <h3>Admin</h3>
                <span>{moment().format('llll')}</span>
              </div>

            </GreeetingCard>
            <Card>
              <Calendar
                fullscreen={false}
                onPanelChange={onPanelChange}
                onSelect={onSelectDate} 
                />
            </Card>

          </Col>
        </Row>

      </MainContainer>
    </div>
  )
}

export default Dashboard

const MainContainer = styled.div`
  background-color: #f9f9f9;
  // width: 84%;
  float: right;
`

const GreeetingCard = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-top: 16px;
  background-image: url(${day});
  background-position: top;
  background-size: cover;
  overflow: hidden;
  box-shadow: 0 4px 4px 0 rgba( 31, 38, 135, 0.37 );
  margin-bottom: 16px;
  .GlassContainer{
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    background: #cfa7a47e;
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );

    h1{
      font-size: 32px;
      color: #fefefe;
      margin-bottom: 8px;
      
    }
    h3{
      font-size: 18px;
      font-weight: 500;
      color: #252e3d;
    }
    span{
      font-size: 24px;
      font-weight: 500;
      /* margin-top: 40px; */

    }
  }

`