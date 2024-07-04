"use client";

import { useEffect, useState, useRef, forwardRef } from "react";
import { getPosts } from "@/utils/getPosts";
import Card from "../UI/Card/Card";
import Pagination from "../UI/Pagination/Pagination";
import { Button } from "../UI/Button/Button";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [displaySinglePost, setDisplaySinglePost] = useState(null);
	const ref = useRef(null);

	function clickHandler() {
		ref.current?.scrollIntoView({ behavior: "smooth" });
		setDisplaySinglePost(null);
	}

	useEffect(() => {
		async function fetchPosts() {
			setIsLoading(true);
			const posts = await getPosts();
			setIsLoading(false);
			setPosts(posts);
		}
		fetchPosts();
	}, []);

	let content = (
		<div className="template-max-width mx-auto px-2.5">
			{isLoading ? (
				<div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600 mx-auto" />
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
					{posts?.map((post) => {
						return post.id <= 6 && <Card className="bg-white shadow-md p-6 text-blue flex flex-col items-start" id={post.id} key={post.id} title={post.title} body={post.body} setDisplaySinglePost={setDisplaySinglePost} refElement={ref}></Card>;
					})}
				</div>
			)}
		</div>
	);

	if (displaySinglePost) {
		const [singlePost] = posts.filter((item) => item.id === displaySinglePost);

		content = (
			<>
				<div className="template-max-width mx-auto text-white px-2.5">
					<h4 className="text-header-4 font-medium mb-6">{singlePost.title}</h4>
					<p>{singlePost.body}</p>
					<Button className="mt-10" onClick={clickHandler}>
						Back to all posts
					</Button>
				</div>
			</>
		);
	}

	return (
		<div ref={ref} className="w-full bg-gradient-to-r from-[#158a9e] to-[#0f1f53] py-10 border-0">
			<div className="text-white template-max-width mx-auto pb-7 px-2.5">
				<h2 className="text-header-2 font-medium mb-5">Latest posts</h2>
				<p>Some text</p>
				<p>Other text</p>
			</div>
			{content}
			{!displaySinglePost && <Pagination />}
		</div>
	);
}
