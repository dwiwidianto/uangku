import React from 'react';
import {
     Tooltip,
     BarChart,
     XAxis,
     YAxis,
     Legend,
     CartesianGrid,
     Bar,
} from 'recharts';
import { getExpenseQuery, getIncomeQuery } from '../../graphql/Query';
import { useQuery } from '@apollo/client';


const Chart = () => {

     const { data: expense } = useQuery(getExpenseQuery);
     const { data: income } = useQuery(getIncomeQuery);

     return (
          <div style={{ textAlign: 'center' }}>
               <h1>Socail Media Users</h1>
               <div className="App">
                    {/* <PieChart width={400} height={400}>
                         <Pie
                              dataKey="users"
                              isAnimationActive={false}
                              data={data}
                              cx={200}
                              cy={200}
                              outerRadius={80}
                              fill="#8884d8"
                              label
                         />
                         <Tooltip />
                    </PieChart> */}
                    <BarChart width={730} height={250} data={[expense && expense.expense][income && income.income]}>
                         <CartesianGrid strokeDasharray="3 3" />
                         <XAxis dataKey="" />
                         <YAxis />
                         <Tooltip />
                         <Legend />
                         <Bar dataKey="cost" fill="#8884d8" />
                         <Bar dataKey="name" fill="#82ca9d" />
                    </BarChart>
               </div>
          </div>
     );
};

export default Chart;
