import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import '../App.css';

export default function Report(){
    const data = [
        {
          name: 'Men',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Women',
          uv: 2000,
          pv: 9800,
          
          amt: 2210,
        },
        {
          name: 'Boys',
          uv: 1398,
          pv: 3000,
          amt: 2290,
        },
        {
          name: 'girls',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Footwear',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Accessory',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        
      ];

    return(
      <main className='main-container'>
      <div className='main-title'>
          <h3>Sales Report</h3>
      </div>

      
     <div className='col-md-12'>
      <div className='row'>
        <div className="col-md-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 5,
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
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
          </ResponsiveContainer>
        </div>
        
      </div>
     </div>
      <div className='charts '>
          
              

          <ResponsiveContainer width="100%" height="100%">
              <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                  top: 5,
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
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
          </ResponsiveContainer>

      </div>
  </main>

    )
}