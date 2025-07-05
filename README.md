# Doctor Appointment Scheduler 🩺📅 </br>
 
![image](https://github.com/user-attachments/assets/343a81f8-eba8-4e72-9f0b-6132c90320ab)

A full‑stack web application that lets patients **discover doctors, book appointments, and manage their visits** — all from an intuitive React dashboard backed by a secure Django & DRF API. </br>
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

## 🚀 Quick Start (Local) </br>

1. **Clone & install** </br>
   ```bash
   git clone https://github.com/YOUR_USERNAME/doctor‑appointment.git </br>
   cd doctor‑appointment </br>
Backend </br>

bash </br>
Copy </br>
Edit </br>
cd backend </br>
python -m venv venv && source venv/bin/activate </br>
pip install -r requirements.txt </br>
cp .env.example .env          # set SECRET_KEY, DEBUG, DB creds … </br>
python manage.py migrate </br>
python manage.py runserver </br>
python manage.py createsuperuser (optional) </br>
Frontend </br>

bash </br>
Copy </br>
Edit  </br>
cd ../frontend </br>
npm i </br>
npm run dev       # http://localhost:3000 </br>
Port	Service </br>
8000	Django REST API </br>
3000	React client (Vite dev server) </br>

🔌 API Overview </br>
bash </br>
Copy
Edit </br>
/api/auth/              # register / login / refresh </br>
/api/doctors/           # list, retrieve </br>
/api/appointments/      # CRUD (auth required) </br>
All requests require Authorization: Bearer <JWT> unless noted. </br>

📁 Project Structure </br>
bash </br>
Copy </br>
Edit </br>
backend/ </br>
  apps/ </br>
    accounts/           # custom User + auth views </br>
    doctors/            # Doctor model & serializers </br>
    appointments/       # Appointment model & logic </br>
frontend/ </br>
  src/ </br>
    pages/              # Login, Dashboard, Appointments </br>
    components/         # DoctorCard, AppointmentForm … </br>
    store/              # Redux slices (auth, doctors, appointments)  </br>
🗺️ Roadmap </br>
Doctor self‑service portal (profile & availability) </br>
Calendar‑style slot picker </br>
Email/SMS reminders via Celery + Twilio </br>
Postgres & Docker Compose default </br>

Possible Future Updates
Map to see local doctors in the user's area
Appointment history

Show some support
Give a ⭐️ if you like this project!

License
This project is MIT licensed @ [vintran93]
