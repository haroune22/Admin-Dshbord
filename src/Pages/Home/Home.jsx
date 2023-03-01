import React from 'react'
import Chart from '../../Components/chart/Chart'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import Widgetlg from '../../Components/Widgetlg/Widgetlg'
import Widgetsm from '../../Components/Widgetsm/Widgetsm'
import { Userdata } from '../../Dummydata'
import './Home.css'
const Home = () => {
  return (
    <div 
    className='home'>
        <FeaturedInfo/>
        <Chart data={Userdata} title="User Analytics" grid dataKey="Active User" />
        <div className="homeWidgets">
          <Widgetsm/>
          <Widgetlg/>
        </div>
    </div>
  )
}

export default Home