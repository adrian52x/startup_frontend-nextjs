export default async function getReservations(params) {
    try {
      const { meetingId, senderId, receiverId } = params;
  
      const query = {};
          
      if (meetingId) {
        query.meetingId = meetingId;
      };
  
      if (senderId) {
        query.senderId = senderId;
      }
  
      if (receiverId) {
        query.receiverId = receiverId;
      }

      const queryString = new URLSearchParams(query).toString();
      let url = null;

    if (JSON.stringify(query) === '{}') {
        url = `http://localhost:5000/api/meetings`;
    } else {
        url = `http://localhost:5000/api/meetings?${queryString}`;
    }

  
      const meetings = await fetch(url, { cache: 'no-store' }).then(res => res.json());
  
      return meetings;
      
    } catch (error) {
      throw new Error(error);
    }
  }