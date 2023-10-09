export default async function getMentors() {
    try {
    //   const {
    //     category,
    //     expertise,
    //     location,
    //     availability,
    //   } = params;

    //   let query = {
    //     isMentor: true
    //   };

    //   if (category) {
    //     query.category = category;
    //   }

    //   if (expertise) {
    //     query.expertise = expertise;
    //   }

    //   if (location) {
    //     query.location = location;
    //   }

    //   if (availability) {
    //     query.availability = availability;
    //   }

      const mentors = await fetch('http://localhost:5000/api/mentors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify(query)
      }).then(res => res.json());

      

      return mentors;

    } catch (error) {
      throw new Error(error);
    }
  }