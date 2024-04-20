# Audio/Video meeting create with AWS Chime SDK

## Setup

### Prerequisites

`Ensure you have install NodeJS 18 or later version. Preferred > 20`

### Installation

1. Clone the repository

```bash
git clone https://github.com/torikul-islam/aws-chime-sdk-backend.git
cd aws-chime-sdk-backend
```

2. Install Dependencies

```bash
npm install
```

3. Setup environment

```bash
touch .env (This will create file with the name .env)
setup `accessKeyId`, `secretAccessKey`, `region` with your own credential. ex: accessKeyId=HSDSD9
secretAccessKey=dskjfsdfsdf
region=us-east-1
```

4. After setup the credential

```bash
npm run dev

The project will run default port 3000. If you want to setup the another port you can do that using export PORT=3001
```

### To create meeting link use the following endpoint http://localhost:3000/join. This will send you a response like this

```bash
"attendeeResponse": {
		"Attendee": {
			"ExternalUserId": "39b61ed2-4d56-4e94-983b-f049dabe1508e",
			"AttendeeId": "2737333a-9c9d-f986-50eb-1f43e6b0eb6e",
			"JoinToken": "MjczNzMzM2EtOWM5ZC1mOTg2LTUwZWItMWY0M2U2YjBlYjY1OjAyM2FhZWFkLTBlZjQtNGEwNy1hOThlLWZjMmRhNjMzYzVkYQ_222",
			"Capabilities": {
				"Audio": "SendReceive",
				"Video": "SendReceive",
				"Content": "SendReceive"
			}
		}
	},
	"meetingResponse": {
		"Meeting": {
			"MeetingId": "6aa53599-0b73-45aa-b340-4451f3522713",
			"MeetingHostId": null,
			"ExternalMeetingId": "ba1588c5-59ec-4951-8062-1108cbfb9577",
			"MediaRegion": "us-east-1",
			"MediaPlacement": {
				"AudioHostUrl": "0b1a05f49401af888941a104f0d8ce89.k.m3.ue1.app.chime.aws:3478ee",
				"AudioFallbackUrl": "wss://haxrp.m3.ue1.app.chime.aws:443/calls/6aa53599-0b73-45aa-b340-4451f3522713ee",
				"SignalingUrl": "wss://signal.m3.ue1.app.chime.aws/control/6aa53599-0b73-45aa-b340-4451f352271eee3",
				"TurnControlUrl": "https://2713.cell.us-east-1.meetings.chime.aws/v2/turn_session_ees",
				"ScreenDataUrl": "wss://bitpw.m3.ue1.app.chime.aws:443/v2/screen/6aa53599-0b73-45aa-b340-4451f3522713ee",
				"ScreenViewingUrl": "wss://bitpw.m3.ue1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=6aa53599-0b73-45aa-b340-4451f3522713eee",
				"ScreenSharingUrl": "wss://bitpw.m3.ue1.app.chime.aws:443/v2/screen/6aa53599-0b73-45aa-b340-4451f352271ee3",
				"EventIngestionUrl": "https://data.svc.ue1.ingest.chime.aws/v1/client-events"
			},
			"PrimaryMeetingId": null,
			"TenantIds": [],
			"MeetingArn": "arn:aws:chime:us-east-1:678306532042:meeting/6aa53599-0b73-45aa-b340-4451f3522713"
		}
	}
```
