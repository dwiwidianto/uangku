import React from 'react';
import {
     Tooltip,
     XAxis,
     YAxis,
     Legend,
     CartesianGrid,
     LineChart,
     Line,
} from 'recharts';
import { getExpenseQuery, getIncomeQuery } from '../../graphql/Query';
import { useQuery } from '@apollo/client';

const Chart = () => {
     const { data: expense } = useQuery(getExpenseQuery);
     const { data: income } = useQuery(getIncomeQuery);

     console.table(expense && expense.name);

     return (
          <div style={{ textAlign: 'center' }}>
               <h1 className="mt-5 mb-5">Chart Money Tracker</h1>
               <div className="App">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-6">
                                   <LineChart
                                        width={700}
                                        height={250}
                                        data={expense && expense.expense}
                                        margin={{
                                             top: 5,
                                             right: 30,
                                             left: 20,
                                             bottom: 5,
                                        }}
                                   >
                                        <XAxis dataKey="cost" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend
                                             verticalAlign="top"
                                             height={36}
                                        />
                                        <Line
                                             name="Expense Cost"
                                             type="monotone"
                                             dataKey="cost"
                                             stroke="#8884d8"
                                        />
                                   </LineChart>
                              </div>
                              <div className="col-md-6">
                                   <LineChart
                                        width={700}
                                        height={250}
                                        data={income && income.income}
                                        margin={{
                                             top: 5,
                                             right: 30,
                                             left: 20,
                                             bottom: 5,
                                        }}
                                   >
                                        <XAxis dataKey="cost" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend
                                             verticalAlign="top"
                                             height={36}
                                        />
                                        <Line
                                             name="Income Cost"
                                             type="monotone"
                                             dataKey="cost"
                                             stroke="#8884d8"
                                        />
                                   </LineChart>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Chart;
