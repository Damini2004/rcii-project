# RCII Blog Backend

Node.js + Express + MongoDB (Mongoose) REST API powering the RCII blog system, built with an MVC structure.

## Structure
```
backend/
├── server.js               # App entry point
├── config/db.js            # MongoDB connection
├── controllers/
│   ├── blogController.js   # Blog CRUD, search, pagination, uploads
│   └── adminController.js  # Admin login / profile
├── middleware/
│   ├── authMiddleware.js   # JWT verification (protect)
│   ├── uploadMiddleware.js # Multer image upload config
│   ├── errorMiddleware.js  # Centralized error handling
│   └── validateRequest.js  # express-validator result handler
├── models/
│   ├── Blog.js              # Blog schema (auto slug generation)
│   └── Admin.js              # Admin schema (bcrypt password hashing)
├── routes/
│   ├── blogRoutes.js
│   └── adminRoutes.js
├── seed/createAdmin.js      # Creates/updates the default admin account
└── uploads/                  # Uploaded blog images (served at /uploads)
```

## Setup

```bash
cp .env.example .env
# edit MONGO_URI, JWT_SECRET, CLIENT_URL, ADMIN_EMAIL, ADMIN_PASSWORD

npm install
npm run seed:admin   # one-time: creates your admin login
npm run dev           # nodemon, http://localhost:5000
# or
npm start
```

## Environment variables (`.env`)
| Variable | Description |
|---|---|
| `PORT` | API port (default 5000) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign admin JWTs — use a long random string in production |
| `JWT_EXPIRES_IN` | Token lifetime, e.g. `7d` |
| `CLIENT_URL` | Frontend origin(s) allowed by CORS, comma-separated |
| `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Used only by `npm run seed:admin` to create/update the first admin |

## Security features included
- Helmet for secure HTTP headers
- CORS restricted to `CLIENT_URL`
- express-rate-limit on all `/api` routes (300 req / 15 min per IP)
- JWT-based auth for all admin/write endpoints
- bcrypt password hashing (10 salt rounds)
- express-validator on write endpoints
- Multer file-type (jpeg/jpg/png/webp/gif) and size (5MB) restrictions on uploads
- Centralized error handler (hides stack traces in production)

## Notes
- Slugs are generated automatically from the blog title and de-duplicated (`my-title`, `my-title-1`, ...). They are immutable once a blog exists unless the title itself changes.
- `publishedAt` is set automatically the first time a blog's status changes to `published`.
- Images are stored on local disk under `uploads/` and served statically at `/uploads/<filename>`. For production, consider swapping this for S3/Cloudinary — only `uploadMiddleware.js` and the `featuredImage` field would need to change.
