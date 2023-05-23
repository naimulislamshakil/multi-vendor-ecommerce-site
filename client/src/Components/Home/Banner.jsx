import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Item from './Item.jsx';
import React from 'react';
import items from '../../Constants/Home/Banner';

const Banner = () => {
	return (
		<Box>
			<Carousel>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</Box>
	);
};

export default Banner;
