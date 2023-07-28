import React, { useState } from 'react';
import {
	Box,
	Button,
	Grid,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import Header from '../Header';
import { categoryData } from '../../constants/Category';
import { tokens } from '../../theme';
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined';
import { useDispatch } from 'react-redux';
import { addCategoryforAdmin } from '../../store/Reducer/catrgoryReducer';
import { baseUrl } from '../../api/api';

const Category = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [state, setState] = useState({
		name: '',
		image: '',
	});
	const [imgShow, setImgShow] = useState();
	const dispatch = useDispatch();

	const token = localStorage.getItem('accessToken');

	const uplodeImage = async (e) => {
		if (e.target.files.length > 0) {
			setImgShow(URL.createObjectURL(e.target.files[0]));
			setState({
				...state,
				image: e.target.files[0],
			});
		}
	};

	const addCategory = () => {
		const img = state.image;
		const formData = new FormData();
		formData.append('image', img);

		fetch(`${baseUrl}/file-uplode`, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json)
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<Box m="20px">
			<Header title="CATEGORY" subtitle="Show All Category" />

			<Box>
				<Grid container spacing={2}>
					<Grid item sx={12} md={8}>
						jhfgdsb
					</Grid>
					<Grid item sx={12} md={4}>
						<Box gridRow="span 3" bgcolor={colors.primary[400]} p={2}>
							<Typography variant="h4" fontWeight="600">
								{categoryData.addCategory}
							</Typography>

							<Box>
								<TextField
									style={{ marginTop: '20px', width: '90%' }}
									fullWidth
									color="secondary"
									id="outlined-basic"
									label={categoryData.categoryName}
									variant="outlined"
									onChange={(e) => setState({ ...state, name: e.target.value })}
								/>

								{/* select image */}

								{imgShow ? (
									<img
										width="90%"
										style={{
											marginTop: '10px',
										}}
										height="238px"
										src={imgShow}
										alt=""
									/>
								) : (
									<>
										<input
											type="file"
											name="image"
											id="select-image"
											style={{ display: 'none' }}
											onChange={uplodeImage}
										/>

										<label htmlFor="select-image">
											<Box
												border="2px dotted white"
												height="238px"
												display="flex"
												justifyContent="center"
												alignItems="center"
												width="90%"
												marginTop={2}
											>
												<Box p={5} textAlign="center">
													<span>
														<FilterOutlinedIcon />
													</span>
													<Typography>{categoryData.selectImg}</Typography>
												</Box>
											</Box>
										</label>
									</>
								)}

								{/* Button */}
								<Button
									style={{
										width: '90%',
										marginTop: '10px',
										color: colors.grey[100],
										background: colors.greenAccent[500],
									}}
									variant="contained"
									onClick={(e) => addCategory()}
								>
									{categoryData.button}
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Category;
