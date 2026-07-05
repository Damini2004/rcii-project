# RCII Blog Backend

Node.js + Express + Firebase Firestore REST API powering the RCII blog system.

## Setup

```bash
cp ../.env.example .env
# edit CLIENT_URL, Firebase values, and backend service account credentials

npm install
npm run dev
```

The API runs at `http://localhost:5000` by default.

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | API port, default `5000` |
| `CLIENT_URL` | Frontend origin(s) allowed by CORS, comma-separated |
| `FIREBASE_API_KEY` | Firebase web API key |
| `FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `FIREBASE_PROJECT_ID` | Firebase project ID |
| `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` | Backend service account credentials for Firebase Admin/Firestore access |
| `FIREBASE_SERVICE_ACCOUNT` | Optional JSON service account alternative |

## Collections

The backend uses Firestore for blog storage and user profiles.
The `admins` collection is no longer required when using Firebase Authentication.
Only `blogs` are managed directly by this API.

Images are still stored locally under `backend/uploads/` and served at `/uploads/<filename>`.
