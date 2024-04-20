require('dotenv').config();
import AWS from 'aws-sdk';
import express from 'express';
import { v4 as uuid } from 'uuid';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/join', async (req, res) => {
  AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region,
  });

  const chime = new AWS.ChimeSDKMeetings({ region: process.env.region });
  const meetingResponse = await chime
    .createMeeting({
      MediaRegion: process.env.region as string,
      ClientRequestToken: uuid(),
      ExternalMeetingId: uuid(),
    })
    .promise();

  const attendeeResponse = await chime
    .createAttendee({
      MeetingId: meetingResponse.Meeting?.MeetingId as string,
      ExternalUserId: uuid(),
    })
    .promise();
  res.send({ attendeeResponse, meetingResponse });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
