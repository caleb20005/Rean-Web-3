# Rean Primary & Junior Secondary School - Web Portal

A comprehensive web-based management system for Rean Primary & Junior Secondary School featuring student portals, teacher dashboards, admin management, and parent communication tools.

## 🎓 Key Features

- **Student Portal**: Access academics, attendance, and course materials
- **Teacher Dashboard**: Manage grades, attendance, and class progress
- **Admin Portal**: Staff management, user administration (admin-only access)
- **Headteacher Dashboard**: School oversight and reporting
- **Bursar Dashboard**: Financial management and fee tracking
- **Parent Communication**: Real-time updates and progress reports
- **Role-Based Access Control**: Secure authentication with role-specific permissions
- **CBC Curriculum Support**: Aligned with Kenya's Competency-Based Curriculum

## 📁 Project Structure

```
Rean-Web-3/
├── backend/              # Express.js API server
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Authentication & error handling
│   │   ├── models/       # Data models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── data/         # JSON data storage
│   └── package.json
│
├── frontend/             # HTML/CSS/JS frontend
│   ├── home.html
│   ├── login.html
│   ├── staff.html        # Admin portal (restricted)
│   ├── Admin.html
│   ├── teacher-dashboard.html
│   ├── Headteacher.html
│   ├── bursar-dashboard.html
│   ├── student-portal.html
│   ├── parent-dashboard.html
│   ├── academics.html
│   ├── contact.html
│   ├── script.js
│   ├── styles.css
│   ├── config.js
│   ├── robots.txt        # Search engine blocking
│   ├── .htaccess         # Server-level security
│   └── assets/           # Images and media
│
└── README.md
```

## 🔐 Security Features

- **Admin-Only Access**: Staff portal (`staff.html`) restricted to admin role
- **Role-Based Authorization**: Different dashboard access for each user type
- **Server-Side Validation**: User role verification on API calls
- **Search Engine Protection**: `robots.txt` and meta tags prevent indexing of admin pages
- **Server-Level Restrictions**: `.htaccess` file blocks direct access attempts
- **Secure Headers**: Prevents caching and XSS attacks

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- PostgreSQL or JSON file storage
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Rean-Web-3.git
   cd Rean-Web-3
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm start
   ```

3. **Setup Frontend**
   - Open `frontend/index.html` in a web browser
   - Or serve via a local web server (e.g., Live Server VS Code extension)

### Default Credentials
- **Student**: Username/Email: User ID, Password: (as set during signup)
- **Admin**: Create admin account during signup with admin role

## 🔑 User Roles

| Role | Access Level | Dashboard |
|------|-------------|-----------|
| **Admin** | Full System | Staff Directory, User Management, Admin Portal |
| **Headteacher** | Management | School Overview, Staff & Student Reports |
| **Bursar** | Financial | Fees, Finances, Payments |
| **Teacher** | Teaching | Class Management, Grades, Attendance |
| **Student** | Personal | Academics, Timetable, Results |
| **Parent** | Child's Data | Child's Progress, Attendance, Fees |

## 📊 Backend API

### Base URL
```
http://localhost:5001/api
```

### Authentication Routes
- `POST /auth/signup` - Create new user account
- `POST /auth/login` - User login

### Admin Routes (Admin-only)
- `GET /admin/users` - List all users
- `DELETE /admin/users/:id` - Remove user

### Admin Portal
- **URL**: `http://localhost:3000/staff.html`
- **Access**: Admin role only
- **Features**: Staff directory, user management, system administration

## 🛠 Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript (Vanilla)
- Tailwind CSS (Styling)
- Font Awesome (Icons)

**Backend:**
- Node.js
- Express.js
- PostgreSQL / JSON File Storage

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```
NODE_ENV=development
PORT=5001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rean_school
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```

## 🔒 Admin Portal Security

The staff portal at `frontend/staff.html` is completely hidden from non-admin users:

1. **Frontend Protection**: Admin role check on page load
2. **Navigation Hiding**: Staff menu only visible to admins
3. **Server Protection**: API endpoint validates admin role
4. **Search Engine Blocking**: `robots.txt` and meta tags prevent indexing
5. **Direct Access Prevention**: `.htaccess` server rules deny unauthorized access

## 📱 Responsive Design

All dashboards are fully responsive and work seamlessly on:
- ✅ Desktop browsers
- ✅ Tablets
- ✅ Mobile phones

## 🐛 Troubleshooting

### Cannot connect to backend
- Verify Node.js is running: `npm start` in backend folder
- Check port 5001 is not in use: `netstat -ano | findstr :5001`
- Ensure `.env` file is configured

### Admin portal not accessible
- Verify you're logged in as admin role
- Clear browser cache and restart
- Check browser console for errors

### Database connection error
- Ensure PostgreSQL is running
- Verify credentials in `.env` file
- Create database if not exists

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributors

- Development Team at Rean School

## 📧 Support

For questions or issues, contact: support@reanschool.ke

---

**Built with ❤️ for Rean Primary & Junior Secondary School**
