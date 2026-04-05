# PortfolioNextJS

Frontend application for my personal portfolio, built with Next.js and Tailwind CSS.

This project is designed to work as a frontend layer for my backend system **PortfolioSpring**, a Java Spring Boot application that provides structured data via REST API.

---

## 🚀 Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- REST API (Spring Boot backend)

---

## 🧠 About the Project

**PortfolioNextJS** is a modern frontend application that consumes data from my custom backend:

👉 PortfolioSpring (Java + Spring Boot)

The goal of this project is:
- to separate frontend and backend architecture
- to practice real-world fullstack development
- to build a fast, SEO-friendly and scalable personal website

All personal data (experience, education, socials, etc.) is provided dynamically through the API.

---

## 🔌 API Integration

The frontend connects to the backend via REST API.

Example endpoint:

```
https://api.holovin.com/api/v1/customer/{customerId}
```

---

## ⚙️ Environment Variables

Create a file called:

```
.env.local
```

and add:

```env
API_BASE_URL=https://api.holovin.com
CUSTOMER_ID=your_customer_id_here
```

⚠️ Important:
- `.env.local` is **not committed to GitHub**
- Use `.env.example` as a reference

---

## 📄 .env.example

```env
API_BASE_URL=
CUSTOMER_ID=
```

---

## ▶️ Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🛠️ Development Notes

- Uses **Next.js App Router** (no `getServerSideProps`)
- Data is fetched using native `fetch()` inside server components
- Tailwind CSS is configured via modern Next.js setup
- Designed for deployment on Vercel or any Node-compatible environment

---

## 📦 Deployment

Recommended:

- Vercel (best integration with Next.js)

---


## 📜 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this software.

---

## 👤 Author

Viktor Holovin

- Website: https://holovin.com
- Blog: https://innomarts.com
- GitHub: https://github.com/holovin777

---

## ⚡ Philosophy

> Build real things.  
> Connect frontend and backend.  
> Learn by doing, not by watching tutorials.

---
