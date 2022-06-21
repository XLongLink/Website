import type { GetStaticProps, NextPage } from "next";
import BodyStyle from "../styles/bodystyle";
import NavBar from "../components/navabar/navbar";
import Footbar from "../components/footbar/footbar";
import ElementGrid from "../components/news/elementGrid";
import Head from "next/head";

const NewsPage: NextPage = (props: any) => {
	console.log(props);
	return (
		<>
			<Head>
				<title> News </title>
			</Head>
			<BodyStyle background='#191919' />
			<NavBar />
			<ElementGrid />
			<Footbar />
		</>
	);
};
export default NewsPage;

import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";
import { News } from "../interfaces/news";

export function getStaticProps() {
	const POSTS_PATH = join(process.cwd(), "articles");

	const paths = fs.readdirSync(POSTS_PATH);

	const news: Array<News> = [];

	paths.forEach((path) => {
		console.log(path);
		const fileContents = fs.readFileSync(
			`${process.cwd()}/articles/${path}`
		);

		const { data, content } = matter(fileContents);

		news.push({
			title: data.title,
			date: data.date,
			image: data.image, // under public/news
			size: data.size,
			body: content,
		});
	});

	return { props: { news } };
}
