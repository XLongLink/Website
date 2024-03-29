import type { NextPage } from "next";
import NavBar from "../components/navabar/navbar";
import Footbar from "../components/footbar/footbar";
import CollaboratorBox, { Person } from "../components/about/collaborator";
import Description from "../components/about/description";
import Head from "next/head";

/*
    Edit array with new members to add them into the list
*/
const utenti: Array<Person> = [
	{
		name: "Leonardo",
		lastname: "Saurwein",
		image: "sau.jpg",
		role: "Founder & Developer ",
		social: {
			linkedin: "https://www.linkedin.com/in/leonardo-saurwein-26206b217",
			github: "https://github.com/sau1707",
			gmail: "leonardo@saurwein.ch",
		},
	},
	{
		name: "Adriano",
		lastname: "Saurwein",
		image: "adri.jpg",
		role: "Developer",
		social: {
			github: "https://github.com/Nano042101",
			gmail: "adriano@saurwein.ch",
			instagram: "https://www.instagram.com/adri_sau/",
		},
	},
	{
		name: "Leo",
		lastname: "Liviabella",
		role: "Marketing manager",
		image: "leo.jpg",
		social: {
			linkedin: "https://www.linkedin.com/in/leo-liviabella-788966208",
			gmail: "leoliviabella01@gmail.com",
		},
	},
	{
		name: "Claudio",
		lastname: "Casarella",
		role: "Graphic Designer",
		image: "cla.jpg",
		social: {
			gmail: "casarellaclaudio@gmail.com",
		},
	},
	{
		name: "Christian",
		lastname: "Corti",
		role: "Financial director",
		image: "corti.jpg",
		social: {
			gmail: "Ccorti@ethz.ch",
		},
	},
	{
		name: "Francesco",
		lastname: "Casarella",
		image: "fra.jpg",
		social: {
			gmail: "casarellafrancescodc@gmail.com",
		},
	},
];

const text = [
	"We are a team of students and close friends, passionate about informatics and blockchain technology",
	"Our vision of web3 is a secure, fast and practical to use internet",
	"Our goal is to be able to contribute in the foundations of the creation of a solid ecosystem",
];

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title> About </title>
			</Head>
			<NavBar />
			<Description text={text} />
			<CollaboratorBox utenti={utenti} />
			<Footbar />
		</>
	);
};

export default About;
