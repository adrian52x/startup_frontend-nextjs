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

      
      const mentors = await fetch('http://localhost:5000/api/mentors').then(res => res.json());
      //const mentors = [response[3]];

      // const response = await fetch('http://localhost:5000/api/mentors');
      // const mentors = await response.json();
      

      return mentors;

    } catch (error) {
      throw new Error(error);
    }
  }