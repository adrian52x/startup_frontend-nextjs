
export default async function getMentors(params) {
    try {
        const {
            category,
            search,
        } = params;

        //console.log(params);

        let query = {};

        if (category) {
            query.category = category;
        }

        if (search) {
            query.search = search;
        }


        const queryString = new URLSearchParams(query).toString();
        let url = null;

        if (JSON.stringify(query) === '{}') {
            console.log("empty");
            url = `${process.env.BACKEND_URL}/api/mentors`;
        } else {
            console.log("not empty");
            url = `${process.env.BACKEND_URL}/api/mentors?${queryString}`;
        }

        
       
        const mentors = await fetch(url, { cache: 'no-store' }).then(res => res.json());


      //const mentors = [response[3]];
    //   const response = await fetch('http://localhost:5000/api/mentors2');
    //   const mentors = await response.json();

      //console.log(mentors);
      

      return mentors;

    } catch (error) {
      return null;
      //throw new Error(error);
    }
  }