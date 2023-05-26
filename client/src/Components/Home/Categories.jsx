import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import brandingData from '../../Constants/Home/Branding';
import categoriesData from '../../Constants/Home/Cetagory';

const Categories = () => {
	const navigate = useNavigate();
	const categories = (cate) => {
		navigate(`/category/${cate}`);
	};
	return (
		<Container maxWidth="sx">
			<Grid
				container
				spacing={2}
				direction="row"
				justifyContent="center"
				alignItems="center"
				marginTop="10px"
			>
				{brandingData.map((brand) => (
					<Grid item sx={3} key={brand.id}>
						<Card
							variant="outlined"
							style={{
								display: 'flex',
								justifyContent: 'center',
								padding: '15px',
								height: '80px',
								alignItems: 'center',
							}}
						>
							<Box>
								<img src={brand.icon} style={{ width: '70px' }} alt="" />
							</Box>
							<Box paddingLeft="10px">
								<Typography variant="h6">{brand.title}</Typography>
								<Typography variant="body1">{brand.Description}</Typography>
							</Box>
						</Card>
					</Grid>
				))}
			</Grid>

			<Box></Box>

			<Box marginTop="30px">
				<Typography variant="h5" fontWeight="bold" textAlign="center">
					Special Collection
				</Typography>

				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
					marginTop="10px"
				>
					{categoriesData.map((categori) => (
						<Grid item sx={3} key={categori.id}>
							<Card
								variant="outlined"
								style={{
									display: 'flex',
									justifyContent: 'center',
									padding: '15px',
									height: '80px',
									alignItems: 'center',
								}}
								onClick={() => categories(categori.title.toLowerCase())}
							>
								<Box>
									<img
										src={categori.image_Url}
										style={{ width: '100px' }}
										alt=""
									/>
								</Box>
								<Box paddingLeft="10px">
									<Typography variant="h6">{categori.title}</Typography>
									<Typography variant="body1">{categori.subTitle}</Typography>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default Categories;
