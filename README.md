# 🚍 SafeDriver

**AI-Based Driver Monitoring and Accident Prevention Platform for Safer Public Transport**

SafeDriver is a modern **Next.js research portfolio and project showcase** for an AI-powered driver monitoring ecosystem. It presents the SafeDriver research domain, project objectives, system features, implementation screenshots, technology stack, downloadable documents, source repositories, team details, and an EmailJS-powered contact form.

The platform focuses on improving public transport safety through real-time driver behavior detection, edge AI, GPS visibility, passenger participation, driver support, and authority-level monitoring.

---

## 📌 Project Overview

Road traffic accidents are a major public safety concern, especially in public transportation environments where driver fatigue, distraction, mobile phone usage, smoking, and inattentiveness can create serious risks.

SafeDriver proposes an affordable and intelligent safety ecosystem that combines:

- 🤖 AI-powered driver monitoring
- 👁️ Drowsiness and distraction detection
- 🚨 Multi-level safety alerts
- 📍 GPS-based route and hazard monitoring
- 📱 Driver and passenger mobile applications
- 🖥️ Authority dashboard for fleet monitoring
- ☁️ Firebase-based cloud synchronization
- 📊 Analytics, reports, and compliance insights

This repository contains the **public-facing web portfolio** for the SafeDriver research project.

---

## ✨ Key Website Sections

### 🏠 Hero

Introduces SafeDriver with a visual landing section, project summary, real-time safety focus, and quick links to features and implementation screenshots.

### 🔬 Research Domain

Explains the project background, research problem, methodology, literature survey, research gap, and core objectives.

### 🧩 Features

Highlights the complete SafeDriver platform capabilities, including AI monitoring, alerts, mobile applications, embedded edge processing, dashboard analytics, and cloud synchronization.

### 📱 Implementation Showcase

Displays screenshots and visual walkthroughs for:

- Embedded AI monitoring system
- Authority dashboard
- Passenger mobile app
- Driver mobile app

### 🛠️ Technologies

Presents the hardware, AI, cloud, web, mobile, backend, and DevOps tools used across the wider SafeDriver ecosystem.

### 📚 Resources

Provides access to project documents, research paper, presentations, and GitHub source repositories.

### 👥 Team

Introduces the SafeDriver project supervisor and development team members.

### 📬 Contact

Includes an EmailJS-powered contact form with validation and toast notifications.

---

## 🧠 Main Platform Capabilities

- **AI Driver Monitoring** - Detects driver fatigue, prolonged eye closure, yawning, blink patterns, and abnormal head movement.
- **Drowsiness Detection** - Uses Eye Aspect Ratio, blink frequency, PERCLOS, and facial landmark tracking.
- **Distraction Detection** - Identifies mobile phone usage, head-turn distraction, and inattentive behavior.
- **Smoking Detection** - Uses computer vision models to detect smoking behavior inside the vehicle.
- **Embedded Edge AI** - Runs AI inference locally on Raspberry Pi 4 for low-latency monitoring.
- **Multi-Level Alerts** - Supports buzzer alarms, voice guidance, vibration alerts, mobile notifications, cloud alerts, and authority escalation.
- **GPS Hazard Mapping** - Tracks vehicle location and helps identify accident-prone areas.
- **Passenger App** - Supports QR scanning, feedback, emergency SOS, reward points, and safety visibility.
- **Driver App** - Supports attendance, assigned bus details, safety alerts, complaints, profile, support, and multilingual settings.
- **Authority Dashboard** - Helps authorities monitor buses, drivers, alerts, feedback, routes, hazards, and reports.
- **Cloud Synchronization** - Uses Firebase services for authentication, storage, messaging, and live data updates.

---

## 🛠️ Tech Stack

### Frontend Website

- ⚡ Next.js 16
- ⚛️ React 19
- 🟦 TypeScript
- 🎨 Tailwind CSS 4
- 🧭 Lucide React icons
- 📈 Vercel Analytics
- 📧 EmailJS
- 🔔 React Hot Toast

### Wider SafeDriver Ecosystem

- 🤖 MediaPipe
- 🧠 TensorFlow Lite
- 👁️ OpenCV
- 🎯 YOLO
- 🥧 Raspberry Pi 4
- 📷 NoIR Camera
- 📍 GPS module
- 📱 Flutter and Dart
- ☁️ Firebase Auth, Firestore, Storage, Cloud Functions, and Cloud Messaging
- 🧰 Node.js, REST APIs, Git, GitHub, Docker, and Linux tooling

---

## 📁 Project Structure

```text
.
├── app/
│   ├── components/
│   │   ├── Documents.tsx
│   │   ├── Domain.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MobileShowcase.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Team.tsx
│   │   └── Technologies.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── public/
│   ├── documents/
│   ├── domain/
│   ├── presentation/
│   ├── research/
│   ├── team/
│   ├── ui/
│   ├── coverimage.png
│   └── safedriver-logo.png
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd NextStop-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a local `.env` file from the example file:

```bash
cp .env.example .env
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env
```

Update `.env` with your own values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the site in your browser:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server after building |
| `npm run lint` | Runs ESLint checks |

---

## 🔐 Environment Variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Base URL used by metadata, sitemap, robots, and social previews |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Yes, for contact form | EmailJS service identifier |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Yes, for contact form | EmailJS email template identifier |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Yes, for contact form | EmailJS browser public key |

> ⚠️ Keep real `.env` values private. Commit only `.env.example`.

---

## 📧 EmailJS Contact Form Setup

The contact form is implemented in `app/components/Footer.tsx`.

Your EmailJS template should support these variables:

- `name`
- `email`
- `message`
- `from_name`
- `from_email`
- `reply_to`
- `time`

If EmailJS values are missing, the form shows a configuration error instead of sending the message.

---

## 📚 Resource Files

The website serves project resources directly from the `public/` folder.

### 📄 Project Documents

Located in:

```text
public/documents/
```

Current documents include:

- Proposal Report
- Progress Report 1
- Progress Report 2
- Progress Report 3
- Final Report

### 🧪 Research Paper

Located in:

```text
public/research/
```

### 🎞️ Presentations

Located in:

```text
public/presentation/
```

Current slide decks include:

- Proposal Presentation
- Progress Presentation 1
- Progress Presentation 2
- Final Presentation

The Progress Presentation 3 card is currently marked as **Coming soon** in the website.

### 🖼️ Images and Screenshots

Located in:

```text
public/domain/
public/team/
public/ui/
```

These folders contain research illustrations, member images, and implementation screenshots for the embedded system, authority dashboard, driver app, and passenger app.

---

## 🔗 Source Code Links Shown on the Website

The Resources section links to the wider SafeDriver source repositories:

- Driver Monitoring System
- Passenger Mobile Application
- Driver Mobile Application
- Authority Web
- SafeDriver Simulation

These links are configured inside:

```text
app/components/Documents.tsx
```

---

## 🔎 SEO and Metadata

SEO configuration is handled in:

```text
app/layout.tsx
app/robots.ts
app/sitemap.ts
```

The project includes:

- ✅ Page title and description
- ✅ Keywords
- ✅ Canonical URL
- ✅ Open Graph metadata
- ✅ Twitter card metadata
- ✅ Social preview image
- ✅ Dynamic sitemap
- ✅ Robots configuration
- ✅ Vercel Analytics

Before production deployment, set:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

---

## 🌐 Deployment

### Recommended: Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add all values from `.env.example` as environment variables.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Deploy the project.

### Manual Production Build

```bash
npm run build
npm run start
```

---

## 🧪 Quality Checks

Run linting before submitting changes:

```bash
npm run lint
```

Create a production build to verify that the project compiles correctly:

```bash
npm run build
```

---

## 🧯 Troubleshooting

### Contact form says EmailJS is not configured

Check that all EmailJS environment variables are present in `.env`, then restart the development server.

### Images or PDFs do not load

Make sure the file exists inside `public/` and that the path used in the component starts with `/`.

Example:

```tsx
"/documents/final.pdf"
```

### Sitemap or metadata shows the wrong domain

Update:

```env
NEXT_PUBLIC_SITE_URL=https://your-correct-domain.com
```

Then rebuild and redeploy the project.

### Turbopack workspace-root warning

`next.config.ts` sets the Turbopack root to the project directory to avoid workspace-root warnings when another lockfile exists higher in the Windows user folder.

---

## 👥 Team

### Supervisor

**Dr.(Ms.) D.D.M. Ranasinghe**  
Senior Lecturer, Department of Electrical and Computer Engineering  
The Open University of Sri Lanka

### Development Team

- **Shaleel Sandeepa** - AI Model Developer
- **Rensith Udara Gonalagoda** - Passenger Mobile App Developer
- **Pulindu Ekanayake** - Web Developer
- **Jayali Perera** - Driver App Developer | QA Engineer
- **Tharushi Denagamage** - UX Designer | QA Engineer

---

## 🤝 Contributing

When updating this project:

1. Keep assets inside the correct `public/` folder.
2. Update resource paths in `app/components/Documents.tsx` when adding new PDFs or links.
3. Keep environment secrets out of Git.
4. Run `npm run lint` before finalizing changes.
5. Run `npm run build` before deployment.

---

## 📄 License

This project is currently marked as private in `package.json`.

If the project is intended to be publicly reused, add a license file such as `MIT`, `Apache-2.0`, or another license selected by the project team.

---

## 💙 About SafeDriver

SafeDriver is built to support safer public transport through practical AI, real-time monitoring, passenger participation, and authority-level visibility.

**Safer journeys. Smarter alerts. Better public transport.**
