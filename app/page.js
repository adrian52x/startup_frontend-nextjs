import getMentors from "./actions/getMentors";
import Container from "./components/Container";
import MentorCard from "./components/mentors/MentorCard";

export default async function Home() {

  const mentors = await getMentors();

  return (
    <Container>
        <div className="pt-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {mentors.map((mentor) => (
                <MentorCard
                    key={mentor._id}
                    data={mentor}
                />
            ))}
        </div>
    </Container>
  )
}
