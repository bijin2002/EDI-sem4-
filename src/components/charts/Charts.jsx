
import {  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {userData} from "../../Dummydata";
import "./charts.css"


export default function Charts() {
  
  return (
    <div className="charts">
        <h3 className="chartTitle">Attendance</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <BarChart
          width={500}
          height={300}
          data={userData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey=  "absent" stackId="a" fill="#8884d8" />
          <Bar dataKey="present" stackId="a" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
