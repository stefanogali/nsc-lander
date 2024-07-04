export async function getPosts() {
	try {
		const staticData = await fetch(`https://jsonplaceholder.typicode.com/posts/`, { cache: "force-cache" });
		const posts = await staticData.json();
		return posts;
	} catch (error) {
		console.log(error);
	}
}
