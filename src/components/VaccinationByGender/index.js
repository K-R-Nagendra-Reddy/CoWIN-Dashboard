// Write your code here
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts'

const VaccinationByGender = props => {
  const {details} = props
  return (
    <div>
      <h1 className="heading">Vaccination By Gender</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            data={details}
            cx={420}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="count"
          >
            <Cell name="Male" fill="#ffffff" />
            <Cell name="Female" fill="#b3d23f" />
            <Cell name="Others" fill="#ffffff" />
          </Pie>
          <Sector />
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
export default VaccinationByGender
