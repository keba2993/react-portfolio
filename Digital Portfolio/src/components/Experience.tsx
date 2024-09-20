import {
	Stepper,
	StepLabel,
	Step,
	Box,
	StepIconProps,
	Typography,
	StepContent,
} from '@mui/material';
import capturedSunLogo from '../assets/captured-sun.svg';
import { useState } from 'react';

function Experience() {
	const [active, setActive] = useState(0);
	const stepElements = [
		{
			id: 1,
			label: (
				<Box
					className={`step-content ${
						active === 1 ? 'step-content-active' : ''
					}`}
				>
					<Typography variant='h5'>Capstone Project Manager</Typography>
					<Typography variant='h6'>Captured Sun</Typography>
					<Typography variant='body1'>Jan XXXX - Jan XXXX</Typography>
				</Box>
			),
			content: (
				<Typography variant='body2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
					pulvinar bibendum risus, feugiat blandit augue egestas a. Curabitur
					sollicitudin ligula eu enim mollis, sit amet commodo eros
					sollicitudin. Nam at egestas sem, a lobortis est. Pellentesque
					convallis massa lectus, a pellentesque arcu feugiat sed. Suspendisse
					eu blandit orci. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nulla viverra eros mauris, eget hendrerit risus sodales vitae.
				</Typography>
			),
		},
		{
			id: 2,
			label: (
				<Box
					className={`step-content ${
						active === 2 ? 'step-content-active' : ''
					}`}
				>
					<Typography variant='h5'>Capstone Project Manager</Typography>
					<Typography variant='h6'>Captured Sun</Typography>
					<Typography variant='body1'>Jan XXXX - Jan XXXX</Typography>
				</Box>
			),
			content: (
				<Typography variant='body2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
					pulvinar bibendum risus, feugiat blandit augue egestas a. Curabitur
					sollicitudin ligula eu enim mollis, sit amet commodo eros
					sollicitudin. Nam at egestas sem, a lobortis est. Pellentesque
					convallis massa lectus, a pellentesque arcu feugiat sed. Suspendisse
					eu blandit orci. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nulla viverra eros mauris, eget hendrerit risus sodales vitae.
				</Typography>
			),
		},
		{
			id: 3,
			label: (
				<Box
					className={`step-content ${
						active === 3 ? 'step-content-active' : ''
					}`}
				>
					<Typography variant='h5'>Capstone Project Manager</Typography>
					<Typography variant='h6'>Captured Sun</Typography>
					<Typography variant='body1'>Jan XXXX - Jan XXXX</Typography>
				</Box>
			),
			content: (
				<Typography variant='body2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
					pulvinar bibendum risus, feugiat blandit augue egestas a. Curabitur
					sollicitudin ligula eu enim mollis, sit amet commodo eros
					sollicitudin. Nam at egestas sem, a lobortis est. Pellentesque
					convallis massa lectus, a pellentesque arcu feugiat sed. Suspendisse
					eu blandit orci. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nulla viverra eros mauris, eget hendrerit risus sodales vitae.
				</Typography>
			),
		},
	];

	const handleStepClick = (icon?: React.ReactNode) => {
		setActive((prevActive) => (prevActive === Number(icon) ? 0 : Number(icon)));
	};

	const LogoStepIcon = (props: StepIconProps) => {
		const { icon, active } = props;

		return (
			<Box component='div' className='step-logo-container'>
				<Box
					component='img'
					className={`step-logo ${active ? 'step-logo-active' : ''}`}
					alt='Captured Sun Logo'
					src={capturedSunLogo}
					onClick={() => handleStepClick(icon)}
				/>
			</Box>
		);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={active} alternativeLabel>
				{stepElements.map((stepEl, index) => (
					<Step
						key={stepEl.id}
						completed={false}
						active={active === index + 1}
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<StepLabel StepIconComponent={LogoStepIcon}>
							{stepEl.label}
						</StepLabel>
						<StepContent>{stepEl.content}</StepContent>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}

export default Experience;
