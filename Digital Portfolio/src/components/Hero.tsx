import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import portraitImg from '../assets/portrait-nasdaq.jpg';

function Hero() {
	return (
		<Grid container spacing={2} className='hero-container'>
			<Grid
				container
				spacing={2}
				size={{ xs: 12, sm: 12, md: 8 }}
				direction='column'
				sx={{ maxHeight: '100%' }}
			>
				<Grid size={12}>
					<Typography variant='h2'>
						Kevin Barone, Fullstack Developer
					</Typography>
				</Grid>
				<Grid size={12}>
					<Typography variant='body1' align='center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
						pulvinar bibendum risus, feugiat blandit augue egestas a. Curabitur
						sollicitudin ligula eu enim mollis, sit amet commodo eros
						sollicitudin. Nam at egestas sem, a lobortis est. Pellentesque
						convallis massa lectus, a pellentesque arcu feugiat sed. Suspendisse
						eu blandit orci. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla viverra eros mauris, eget hendrerit risus sodales vitae.
						Nullam auctor, purus eget eleifend mattis, mi enim placerat arcu,
						sit amet ornare dui orci lacinia ex. In venenatis eros diam, a
						gravida libero maximus et. Aliquam elementum vitae massa at laoreet.
						In sollicitudin pellentesque est vel varius. Vestibulum gravida
						lorem nulla, vel gravida nulla tristique id. Quisque lacinia semper
						ante vitae accumsan. Donec scelerisque, metus quis scelerisque
						blandit, velit ligula vestibulum dolor, a tincidunt enim massa at
						quam.
					</Typography>
				</Grid>
			</Grid>
			<Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ textAlign: 'center' }}>
				<Box
					component='img'
					className='hero-img'
					alt='Kevin Barone Portrait Image'
					src={portraitImg}
				/>
			</Grid>
		</Grid>
	);
}

export default Hero;
