/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

const index = () => {
	const [brandNames, setBrandNames] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/brand/getBrandName', {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})
			.then((res) => res.json())
			.then((data) => {
				setBrandNames(data.BrandName);
			})
			.catch((err) => console.log(err));
	}, []);
	return <div>index</div>;
};

export default index;
