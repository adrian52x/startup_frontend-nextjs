export default async function getMentorById(params) {
    try {
      const { mentorId } = params;

      const url = `http://localhost:5000/api/mentor/${mentorId}`;
      const response = await fetch(url, { cache: 'no-store' });
  
      if (!response.ok) {
        return null;
      }
  
      const mentor = await response.json();
      return mentor;

    } catch (error) {
      throw new Error(error);
    }
}