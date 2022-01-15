import React from 'react';
import Typography from '@mui/material/Typography';
import { PieChart, Pie, Sector, Cell } from 'recharts';

import styles from '../../styles/DamageChart.module.scss';

const data = [
  { name: 'Group A', value: 300 },
  { name: 'Group B', value: 200 },
];

const COLORS = ['#0088FE', 'white'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface FCProps {
  title: string;
}

const DamageChart: React.FC<FCProps> = (props) => {
  return (
    <React.Fragment>
      <Typography>
        {props.title}
      </Typography>
      <div>
        <span className={styles.beginDamage}>
          111
        </span>
        <span className={styles.toDamage}>
          ～
        </span>
        <span className={styles.endDamage}>
          222
        </span>
      </div>
      <PieChart width={350} height={200}>
        <Pie
          data={data}
          cx={50}
          cy={100}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Pie
          data={data}
          cx={250}
          cy={100}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    </React.Fragment>
  )
}

export default DamageChart;