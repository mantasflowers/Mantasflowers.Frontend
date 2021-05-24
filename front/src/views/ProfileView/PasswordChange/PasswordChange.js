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
	Dialog,
	Typography
} from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default
	}
}));

function PasswordChangeView({ className, ...rest }) {
	const classes = useStyles();
	const account = useSelector((state) => state.account);
	const { enqueueSnackbar } = useSnackbar();

	const [ user, setUser ] = useState();
	const passwordTmp = '';
	const [ userDataOverwrite, setUserDataOverwrite ] = useState(null);

	const [ isOpen, setIsOpen ] = useState(false);

	const { register, handleSubmit, errors, control } = useForm();

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleOverwrite = async () => {
		const response = await axios
			.patch('https://mantasflowers-backend.azurewebsites.net/user', {
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${account.user.idToken}`
				}
			})
			.catch((error) => {
				console.log({ error });

				enqueueSnackbar('Sistemos klaida!', {
					variant: 'error'
				});
			});
		handleClose();
		if (response) {
			enqueueSnackbar('Sėkmingai perrašyta!', {
				variant: 'success'
			});
		}
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

	const onSubmit = async (data) => {
		const password = {
			password: data.password
		};
		const response = await axios
			.post('https://mantasflowers-backend.azurewebsites.net/authentication/update/password', password, {
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${account.user.idToken}`
				}
			})
			.catch((error) => {
				console.log({ error });
				if (error.response.status === 409) {
					setIsOpen(true);
					setUserDataOverwrite(password);
					enqueueSnackbar('Konfliktas!', {
						variant: 'error'
					});
				} else if (error.response.status === 500) {
					enqueueSnackbar(error.response.data.Message, {
						variant: 'error'
					});
				} else {
					enqueueSnackbar('Sistemos klaida!', {
						variant: 'error'
					});
				}
			});

		if (response) {
			enqueueSnackbar('Sėkmingai išsaugota!', {
				variant: 'success'
			});
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit((data) => onSubmit(data))}>
				{user && (
					<Card className={clsx(classes.root, className)} {...rest}>
						<CardHeader title="Slaptažodžio pakeitimas" />
						<Divider />
						<CardContent>
							<Grid container spacing={4}>
								<Grid item md={12} xs={12}>
									<TextField
										fullWidth
										label="Naujas slaptažodis"
										name="password"
										required
										type="password"
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
								color="primary"
								type="submit"
								variant="contained"
								style={{ textTransform: 'initial', color: '#d8a56d' }}
							>
								Saugoti
							</Button>
						</Box>
					</Card>
				)}
			</form>

			<Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
				<Typography variant="h4" component="h2" className={classes.productTitle}>
					Įvyko versijų konfliktas, kaip norite jį išspręsti?
				</Typography>

				<Box mt={2} style={{ display: 'flex', flexWrap: 'nowrap', padding: 10 }}>
					<Button
						variant="contained"
						color="primary"
						style={{
							color: '#d8a56d',
							textTransform: 'initial',
							width: '50%',
							marginRight: 10
						}}
						onClick={handleOverwrite}
					>
						Perrašyti su darbartiniais pakeitimais
					</Button>
					<Button
						variant="contained"
						color="primary"
						style={{ color: '#d8a56d', textTransform: 'initial', width: '50%' }}
						onClick={(e) => {
							window.location.replace('/profile-edit');
						}}
					>
						Gauti naujausius pakeitimus
					</Button>
				</Box>
			</Dialog>
		</div>
	);
}

PasswordChangeView.propTypes = {
	className: PropTypes.string
};

export default PasswordChangeView;
