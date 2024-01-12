// Write your code here
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {details} = props
  return (
    <div>
      <h1 className="heading">Vaccination By Age</h1>
      <ResponsiveContainer width={1000} height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={details}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            <Cell name="18-44" fill="#ffffff" />
            <Cell name="45-60" fill="#000000" />
            <Cell name="Above 60" fill="red" />
          </Pie>
          <Legend
            iconType="circle"
            verticalAlign="middle"
            align="right"
            layout="vertical"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
