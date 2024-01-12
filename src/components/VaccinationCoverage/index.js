// Write your code here
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {details} = props
  console.log(details)
  console.log('details received')
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div>
      <h1 className="heading">Vaccination Coverage</h1>
      <ResponsiveContainer width={1000} height={300}>
        <BarChart
          width={1000}
          height={300}
          data={details}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{stroke: 'gray', strokeWidth: 0}}
          />

          <Legend wrappedStyle={{padding: 30}} />
          <Bar dataKey="dose1" name="dose1" fill="#8884d8" barSize="20%" />
          <Bar dataKey="dose2" name="dose2" fill="#82ca9d" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
