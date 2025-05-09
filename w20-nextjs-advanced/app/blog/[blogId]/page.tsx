import axios from "axios";

export default async function BlogPage({
  params,
}: {
  params: { blogId: string };
}) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const data = response.data;

  return (
    <div className="flex flex-col items-center justify-center m-60 w-96 border border-white p-4">
    <div>
      <div>Post id : {data.id}</div>
      <br />
      <div>Post Title : {data.title}</div>
      <br />
      <div>Post Body : {data.body}</div>
    </div>
    </div>
  );
}
