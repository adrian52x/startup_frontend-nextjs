export default async function getMeetings(params) {
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
        console.log("meetings - empty");
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/meetings`;
    } else {
        console.log("meetings - not empty");
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/meetings?${queryString}`;
    }

  
      const meetings = await fetch(url, { cache: 'no-store' }).then(res => res.json());
  
      return meetings;
      
    } catch (error) {
      throw new Error(`Fetch failed: ${error.message}`);
    }
  }