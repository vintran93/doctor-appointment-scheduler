# Doctor Appointment Scheduler 🩺📅 </br>
 
![image](https://github.com/user-attachments/assets/343a81f8-eba8-4e72-9f0b-6132c90320ab)

A full‑stack web application that lets patients book appointments with specialized doctors in the local area, and manage their visits** — all from an intuitive React dashboard backed by a secure Django & DRF API. </br>
---

✨ Key Features </br>
| Area | Highlights | </br>
|------|------------| </br>
| **Authentication** | JSON Web Tokens (JWT) with refresh/rotation via `rest_framework_simplejwt` | </br>
| **Doctor Directory** | Browse searchable cards, including specialty, education, profile image & address | </br>
| **Appointment Booking** | Pick a date & time; conflict‑free slots enforced (`unique_together`) | </br>
| **User Dashboard** | React + Tailwind UI with protected routes, tabbed navigation, and Redux state | </br>
| **Role Separation** | Custom `accounts.User` model (email‑as‑login) keeps the door open for future doctor/admin roles | </br>
| **API‑first** | All data exposed under `/api/*` for easy mobile or third‑party integration | </br>
| **System Administration** | Create user accounts and doctors or edit their information such as providing password resests

--- </br>

🛠 Tech Stack </br>
- **Backend:** Django 4 · Django REST Framework · SQLite (swap for Postgres in production)   </br>
- **Auth:** `djangorestframework‑simplejwt` </br>
- **Frontend:** React 18 · Vite · TailwindCSS · Redux Toolkit + Thunks </br>
- **Dev Ops:** `corsheaders`, dotenv‑style secrets, modular Docker files (optional) </br>

---

## 🚀 Quick Start (Local) 

1. **Clone & install**
   ```bash
   git clone https://github.com/YOUR_USERNAME/doctor‑appointment.git 
   cd doctor‑appointment 

2. Backend </br>
```
   bash 
   Copy 
   Edit 
   cd backend 
   python -m venv venv && source venv/bin/activate 
   pip install -r requirements.txt 
   cp .env.example .env          # set SECRET_KEY, DEBUG, DB creds … 
   python manage.py migrate 
   python manage.py runserver 
   python manage.py createsuperuser (optional) 
```

3. Frontend </br>
```
   bash 
   Copy 
   Edit  
   cd ../frontend 
   npm i 
   npm run dev       # http://localhost:3000 
   Port	Service 
   8000	Django REST API
   3000	React client (Vite dev server)
``` 
🔌 API Overview </br>
```
   bash
   Copy
   Edit 
   /api/auth/              # register / login / refresh 
   /api/doctors/           # list, retrieve 
   /api/appointments/      # CRUD (auth required) 
   All requests require Authorization: Bearer <JWT> unless noted.
```

📁 Project Structure </br>
```
   bash 
   Copy 
   Edit 
   backend/ 
     apps/ 
       accounts/           # custom User + auth views 
       doctors/            # Doctor model & serializers 
       appointments/       # Appointment model & logic 
   frontend/ 
     src/ 
       pages/              # Login, Dashboard, Appointments 
       components/         # DoctorCard, AppointmentForm … 
       store/              # Redux slices (auth, doctors, appointments)
```

🗺️ Roadmap <br/>
```
   Doctor self‑service portal (profile & availability) <br/>
   Calendar‑style slot picker <br/>
   Email/SMS reminders via Celery + Twilio  <br/>
   Postgres & Docker Compose default  <br/>

   Possible Future Updates <br/>
   Map to see local doctors in the user's area <br/>
   Appointment history  <br/>
   
   Show some support   
   Give a ⭐️ if you like this project! 
   
   License 
   This project is MIT licensed @ [vintran93]

