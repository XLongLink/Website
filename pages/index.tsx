import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../components/navabar/navbar";
import Switch from "../components/index/switch";
import Title from "../components/index/title";
import Footbar from "../components/footbar/footbar";
import About from "../components/index/about";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title> Home</title>
				<meta charSet='utf-8' />
				<meta name='description' content='Official LongLink website' />
				<meta name='robots' content='longlink, xlonglink' />
			</Head>
			<NavBar />
			<Title />
			<About />
			<Switch />
			<Footbar />
		</>
	);
};

export default Home;
