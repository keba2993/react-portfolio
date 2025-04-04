// src/data.ts
import { ExperienceDataType } from './types/experienceData';

export const experienceData: ExperienceDataType[] = [
	{
		imagePath: '/cobank.svg',
		jobTitle: 'Associtate Software Engineer, Full Stack',
		companyName: 'CoBank, ACB',
		startDate: 'Nov 2024',
		endDate: 'Present',
		responsibilities: [
			'Maintaining and enhacingin existing leasing platform ifrastructure to support the leasing business operations, including bug fixes and feature enhancements',
			'Developing end-to-end Playwright tests to ensure the reliability and stability of the leasing platform, reducing tesing efforts from business users',
		],
		color: '#FF5733',
	},
	{
		imagePath: '/captured-sun.svg',
		jobTitle: 'Capstone Project Manager',
		companyName: 'Captured Sun',
		startDate: 'Sep 2023',
		endDate: 'Apr 2024',
		responsibilities: [
			'Oversaw project management efforts to ensure efficient team communication and development of features according to project milestones and goals',
			'Spearheaded improvements to project management practices to create a more productive team environment leading to faster and higher quality feature development ',
			'Assisted in back-end development efforts to create an internal API for device-to-device communication via WebSocket technology',
		],
		color: '#FF5733',
	},
	{
		imagePath: '/nasdaq.svg',
		jobTitle: 'Software Engineer Intern',
		companyName: 'Nasdaq Inc.',
		startDate: 'Jun 2023',
		endDate: 'Aug 2023',
		responsibilities: [
			'Optimized an outdated legacy application, resulting in elevated UI/UX standards, streamlined reporting processes and amplified error identification capabilities by rewriting its codebase using modern technologies',
			'Collaborated within a diverse team of interns and designers, guided by a seasoned Tech Lead, to conceive and develop a modern full-stack web application in a challenging 10-week timeframe',
			'Implemented an end-to-end testing suite with 85% test coverage using the Cypress framework, ensuring the reliability of individual application components and overall frontend integrity',
		],
		color: '#FF5733',
	},
	{
		imagePath: '/willowtree.svg',
		jobTitle: 'Software Test Engineer Intern',
		companyName: 'WillowTree Apps',
		startDate: 'Jun 2022',
		endDate: 'Aug 2022',
		responsibilities: [
			'Engaged in mobile development and test engineering efforts to develop an internal application that encourages employee connection between 1,000 employees alongside other interns and full-time tech leads',
			'Created test plans, executed UI manual and automation testing, and developed key features on iOS and Android platforms',
			'Presented demos of completed development and test work, led daily stand-up meetings, and assisted project leadership by refining requirements, providing feedback, and promoting team alignment in decision-making',
		],
		color: '#FF5733',
	},
];
