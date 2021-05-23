import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	FormHelperText,
	Grid,
	TextField,
	makeStyles,
	ThemeProvider
} from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from "notistack";

const cityOptions = [ 'Vilnius', 'Kaunas', 'NYC' ];

const useStyles = makeStyles((theme) => ({
	root: {
	 backgroundColor: theme.palette.background.paper,
	}
}));

function GeneralSettings({ className, ...rest }) {
	const classes = useStyles();
	const account = useSelector((state) => state.account);
	const { enqueueSnackbar } = useSnackbar();

	const [ user, setUser ] = useState();

	const { register, handleSubmit, errors, control } = useForm();

	const onSubmit = async (data) => {
		const userData = {
			firstName: data.firstName,
			lastName: data.lastName,
			address: {
				country: data.country,
				city: data.city,
				street: data.street,
				zipcode: data.zipcode
			},
			userContactInfo: {
			  email: data.contactEmail,
			  phone: data.number
			}
		  };
	  
		  const response = await axios
			.patch(
			  "https://mantasflowers-backend.azurewebsites.net/user",
			  userData,
			  {
				headers: {
				  accept: "application/json",
				  Authorization: `Bearer ${account.user.idToken}`,
				},
			  }
			)
			.catch((error) => {
			  enqueueSnackbar("Sistemos klaida!", {
				variant: "error",
			  });
			});
	  
		  console.log({ response });
	};

	useEffect(() => {
		if (account.user.idToken != null) {
			const getUserData = async () => {
				const response = await axios.get(`/user/detailed`, {
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${account.user.idToken}`
					}
				});
				setUser(response.data);
			};
			getUserData();
		}
	}, []);

	return (
		<form onSubmit={handleSubmit((data) => onSubmit(data))}>
			{user && (
				<Card className={clsx(classes.root, className)} {...rest}>
					<CardHeader title="Asmuo" />
					<Divider />
					<CardContent>
						<Grid container spacing={4}>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.firstName}
									fullWidth
									label="Vardas"
									name="firstName"
									required
									type="firstName"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.lastName}
									fullWidth
									label="Pavardė"
									name="lastName"
									required
									type="lastName"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="El. paštas"
									name="email"
									required
									disabled
									value={user.loginEmail}
									type="email"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
						</Grid>
					</CardContent>

					<CardHeader title="Kontaktai" />
					<Divider />
					<CardContent>
						<Grid container spacing={4}>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.contactDetails == null ? null : user.contactDetails.email}
									fullWidth
									label="Kontaktinis el. paštas"
									name="contactEmail"
									required
									type="email"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.contactDetails == null ? null : user.contactDetails.phone}
									fullWidth
									label="Tel. numeris"
									name="number"
									required
									type="tel"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
						</Grid>
					</CardContent>

					<CardHeader title="Adresas" />
					<Divider />
					<CardContent>
						<Grid container spacing={4}>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.address == null ? null : user.address.country}
									fullWidth
									label="Šalis"
									name="country"
									required
									type="text"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.address == null ? null : user.address.city}
									fullWidth
									label="Miestas"
									name="city"
									required
									type="text"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.address == null ? null : user.address.street}
									fullWidth
									label="Gatvė ir namo/buto numeris"
									name="street"
									required
									type="text"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									value={user.address == null ? null : user.address.zipcode}
									fullWidth
									label="Pašto kodas"
									name="zipcode"
									required
									type="text"
									variant="outlined"
									control={control}
									inputRef={register}
								/>
							</Grid>
						</Grid>
					</CardContent>

					{errors.submit && (
						<Box mt={3}>
							<FormHelperText error>{errors.submit}</FormHelperText>
						</Box>
					)}
					<Divider />
					<Box p={2} display="flex" justifyContent="flex-end">
						<Button
							color="secondary"
							type="submit"
							variant="contained"
							style={{ textTransform: 'initial' }}
						>
							Save Changes
						</Button>
					</Box>
				</Card>
			)}
		</form>
	);
}

GeneralSettings.propTypes = {
	className: PropTypes.string
};

export default GeneralSettings;
