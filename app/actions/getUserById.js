export default async function getUserById(params) {
    try {
      const { userId } = params;

      const url = `http://localhost:5000/api/user/id/${userId}`;
      const response = await fetch(url, { cache: 'no-store' });
  
      if (!response.ok) {
        return null;
      }
  
      const user = await response.json();
      return user;

    } catch (error) {
      throw new Error(error);
    }
}