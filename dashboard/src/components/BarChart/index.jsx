import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: false,
			text: 'Chart.js Bar Chart',
		},
	},
};

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const data = {
	labels,
	datasets: [
		{
			label: 'Orders',
			data: [34, 65, 34, 65, 34, 34, 34, 56, 23, 67, 23, 45],
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Revenue',
			data: [34, 32, 45, 32, 34, 34, 43, 56, 65, 67, 45, 78],
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
		{
			label: 'Sellers',
			data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43],
			backgroundColor: 'rgba(66, 245, 173, 0.5)',
		},
	],
};

const index = () => {
	return (
		<Bar
			style={{
				paddingTop: '20px',
			}}
			options={options}
			data={data}
		/>
	);
};

export default index;
