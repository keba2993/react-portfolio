// src/data.ts
import {
	ExperienceDataType,
	ProjectDataType,
	AboutDateType,
} from './types/dataTypes';

export const experienceData: ExperienceDataType[] = [
	{
		imagePath: '/cobank.svg',
		jobTitle: 'Associate Software Engineer, Full Stack',
		companyName: 'CoBank, ACB',
		startDate: 'Nov 2024',
		endDate: 'Present',
		responsibilities: [
			'Maintaining and enhancing existing leasing platform infrastructure to support the leasing business operations, through bug fixes and feature enhancements',
			'Developing end-to-end Playwright tests to ensure the reliability and stability of the leasing platform, reducing testing efforts from business users',
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
			'Spearheaded improvements to project management practices to create a more productive team environment leading to faster and higher-quality feature development',
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
			'Optimized an outdated legacy application, resulting in elevated UI/UX standards, streamlined reporting processes, and amplified error identification capabilities by rewriting its codebase using modern technologies',
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

export const projectsData: ProjectDataType[] = [
	{
		title: 'Verse Tracker',
		description:
			'A JavaScript application that allows users to track their favorite verses and share them with friends. Users can add verses anytiem and see all other added verses from other users.',
		date: 'Oct 2024',
		link: 'https://verse-tracker-app.netlify.app/',
	},
	{
		title: 'Business Card',
		description:
			'A simple React app to briefly introduce myself and provides basic information about me and my work. Provides easy acces to all my relevant accounts such as LinkedId, email, GitHub, and LeetCode.',
		date: 'July 2024',
		link: 'https://keba2993.github.io/react-card/',
	},
];

export const aboutData: AboutDateType[] = [
	{
		title: 'Red Rocks Youth',
		role: 'Small Group Leader',
		description:
			'I volunteer as a small group leader for the youth group at my church where I lead a small group of high school boys, helping them grow in their faith and relationship with Christ.',
		year: '2024 - Present',
		link: 'https://www.redrockschurch.com/youth/',
	},
	{
		title: 'Red Rocks Kids',
		role: 'K-1 Volunteer',
		description:
			'I am a K-1 volunteer for the kids ministry at my church where I serve families with young children to help keep their kids safe during services while teaching them about Christ.',
		year: '2023 - Present',
		link: 'https://www.redrockschurch.com/ministries/kids/',
	},
	{
		title: "CU Boulder Men's Soccer Club",
		role: 'Captain & Player',
		description:
			"During my college years, I participated as a player and a captain on the CU Boulder Men's Club Soccer - Gold team. Through soccer, I have developed a deep appreciation for team collaboration, leadership, and work ethic.",
		year: '2021 - 2023',
		link: 'https://www.colorado.edu/sportclubs/mens-sports/mens-soccer',
	},
	{
		title: 'Student Mobilization (StuMo)',
		role: 'Organization Admin',
		description:
			'At CU Boulder, I led and organized Bible studies and other events for Student Mobilization - a student-led ministry on campus that focuses on growing students into disciples of Christ.',
		year: '2021 - 2024',
		link: 'https://www.stumowest.org/',
	},
];
