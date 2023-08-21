/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation'; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
	enabled: true, // set false to disable splash screen
	animation: splashAnimation,
	duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
	animated: true // Set to false to use static SVG
};

const greeting = {
	username: 'Frankie Tse',
	title: "Hi all, I'm Frankie",
	subTitle: emoji(
		'A passionate Software Engineer aiming to be a competent developer with Angular / Java and some other cool libraries and frameworks.'
	),
	resumeLink:
		'https://drive.google.com/file/d/18Of97gns_cdJmLaST-3u-G-H9ou_Mxce/view?usp=sharing', // Set to empty to hide the button
	displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: 'https://github.com/franchottse',
	linkedin: 'https://www.linkedin.com/in/frankie-tse/',
	gmail: 'tsezg523@gmail.com',
	gitlab: 'https://gitlab.com/tsezg523',
	facebook: '',
	medium: '',
	stackoverflow: 'https://stackoverflow.com/users/13474348/frankie',
	// Instagram, Twitter and Kaggle are also supported in the links!
	// To customize icons and social links, tweak src/components/SocialMedia
	display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: 'What I do',
	subTitle: 'A SOFTWARE ENGINEER WHO WANTS TO LEARN EVERY NEW TECH',
	skills: [
		emoji('⚡ Develop frontend / backend apps for websites'),
		emoji('⚡ Write REST APIs using Spring'),
		emoji('⚡ Integration of database systems like MySQL or PostgreSQL')
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: 'html-5',
			fontAwesomeClassname: 'fab fa-html5'
		},
		{
			skillName: 'css3',
			fontAwesomeClassname: 'fab fa-css3-alt'
		},
		{
			skillName: 'JavaScript',
			fontAwesomeClassname: 'fab fa-js'
		},
		{
			skillName: 'angularjs',
			fontAwesomeClassname: 'fab fa-angular'
		},
		{
			skillName: 'reactjs',
			fontAwesomeClassname: 'fab fa-react'
		},
		{
			skillName: 'nodejs',
			fontAwesomeClassname: 'fab fa-node'
		},
		{
			skillName: 'python',
			fontAwesomeClassname: 'fab fa-python'
		},
		{
			skillName: 'java',
			fontAwesomeClassname: 'fab fa-java'
		},
		{
			skillName: 'git',
			fontAwesomeClassname: 'fab fa-git-alt'
		},
		{
			skillName: 'npm',
			fontAwesomeClassname: 'fab fa-npm'
		},
		{
			skillName: 'sql-database',
			fontAwesomeClassname: 'fas fa-database'
		},
		{
			skillName: 'docker',
			fontAwesomeClassname: 'fab fa-docker'
		}
	],
	display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: 'Hong Kong University of Science and Technology',
			logo: require('./assets/images/hkustLogo.png'),
			subHeader: 'Bachelor of Engineering in Computer Engineering',
			duration: 'September 2016 - November 2019',
			desc: 'Studied basic knowledge of both software and hardware',
			descBullets: [
				'Received bachelor of engineering in Computer Engineering',
				'Finished a final year project, which is a 2D top-down game, with Unity and C#'
			]
		},
		{
			schoolName: 'Hong Kong Institute of Vocational Education',
			logo: require('./assets/images/iveLogo.png'),
			subHeader: 'Higher Diploma in Telecommunications and Networking',
			duration: 'September 2014 - June 2016',
			desc: 'Studied basic knowledge of both telecommunication and networking',
			descBullets: [
				'Received higher diploma in Telecommunications & Networking',
				'With Distinction'
			]
		}
	]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: 'Frontend', //Insert stack or technology you have experience in
			progressPercentage: '70%' //Insert relative proficiency in percentage
		},
		{
			Stack: 'Backend',
			progressPercentage: '90%'
		},
		{
			Stack: 'Programming',
			progressPercentage: '80%'
		}
	],
	displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: 'Software Engineer (Full Stack)',
			company: 'OpenBet',
			companylogo: require('./assets/images/openbetLogo.png'),
			date: 'Dec 2021 – May 2023',
			desc: 'Develop frontend and backend applications',
			descBullets: [
				'Develop new features that are required by product owners',
				'Prevent defects with new tests for new features',
				'Fix defects for the team or other parties'
			]
		},
		{
			role: 'Software Engineer',
			company: 'New iMedia',
			companylogo: require('./assets/images/newimediaLogo.png'),
			date: 'Apr 2021 – Jul 2021',
			desc: 'Develop websites',
			descBullets: [
				'Improve the performance for digital marketing by developing a platform which can view ads reports from an account'
			]
		},
		{
			role: 'Software Engineer',
			company: 'Robot Data',
			companylogo: require('./assets/images/robotdataLogo.png'),
			date: 'Jan 2021 – Apr 2021',
			desc: "Develop software and satisfy clients' needs",
			descBullets: [
				'Created a script to web-scrap all images from a website, and scan copyright logos by OCR',
				'Helped a client to develop a web to upload photos of underground tracks and detect cracks'
			]
		}
	]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	// githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
	githubUserName: 'franchottse',
	showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
	display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: 'Big Projects',
	subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
	projects: [
		{
			image: '',
			projectName: '',
			projectDesc: '',
			footerLink: [
				{
					name: '',
					url: ''
				}
				//  you can add extra buttons here.
			]
		},
		{
			image: '',
			projectName: '',
			projectDesc: '',
			footerLink: [
				{
					name: '',
					url: ''
				}
			]
		}
	],
	display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji('Achievements And Certifications 🏆 '),
	subtitle:
		'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

	achievementsCards: [
		{
			title: '',
			subtitle: '',
			image: '',
			imageAlt: '',
			footerLink: [
				{
					name: '',
					url: ''
				},
				{
					name: '',
					url: ''
				},
				{
					name: '',
					url: ''
				}
			]
		},
		{
			title: '',
			subtitle: '',
			image: '',
			imageAlt: '',
			footerLink: [
				{
					name: '',
					url: ''
				}
			]
		},

		{
			title: '',
			subtitle: '',
			image: '',
			imageAlt: '',
			footerLink: [
				{name: '', url: ''},
				{
					name: '',
					url: ''
				}
			]
		}
	],
	display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: 'Blogs',
	subtitle:
		'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',
	displayMediumBlogs: 'false', // Set true to display fetched medium blogs instead of hardcoded ones
	blogs: [
		{
			url: '',
			title: '',
			description: ''
		},
		{
			url: '',
			title: '',
			description: ''
		}
	],
	display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: 'TALKS',
	subtitle: emoji(
		'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
	),

	talks: [
		{
			title: '',
			subtitle: '',
			slides_url: '',
			event_url: ''
		}
	],
	display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji('Podcast 🎙️'),
	subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

	// Please Provide with Your Podcast embeded Link
	podcast: [''],
	display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji('Contact Me ☎️'),
	subtitle:
		'Discuss a job opportunity or just want to say hi? My Inbox is open for all.',
	number: '+852-87654321',
	email_address: 'abc123@gmail.com'
};

// Twitter Section

const twitterDetails = {
	userName: 'twitter', //Replace "twitter" with your twitter username without @
	display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
	illustration,
	greeting,
	socialMediaLinks,
	splashScreen,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
	isHireable
};
