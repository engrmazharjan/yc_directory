import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import postImage from "@/public/post.png";
import profileImage from "@/public/profile.jpg";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        image: profileImage,
        name: "MJ",
      },

      _id: 1,
      description:
        "A mobile app that helps users track and reduce their carbo and best ins...",
      image: postImage,
      category: "Robots",
      title: "We Robot",
    },
    {
      _createdAt: new Date(),
      views: 12,
      author: {
        _id: 2,
        image: profileImage,
        name: "MJ",
      },

      _id: 2,
      description:
        "A mobile app that helps users track and reduce their carbo and best ins...",
      image: postImage,
      category: "Robots",
      title: "Robots in Space",
    },
    {
      _createdAt: new Date(),
      views: 30,
      author: {
        _id: 3,
        image: profileImage,
        name: "MJ",
      },

      _id: 3,
      description:
        "A mobile app that helps users track and reduce their carbo and best ins...",
      image: postImage,
      category: "Robots",
      title: "Robots in House",
    },
    {
      _createdAt: new Date(),
      views: 15,
      author: {
        _id: 4,
        image: profileImage,
        name: "MJ",
      },

      _id: 4,
      description:
        "A mobile app that helps users track and reduce their carbo and best ins...",
      image: postImage,
      category: "Robots",
      title: "Robotics in AI",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      {/* All Startups Section */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
