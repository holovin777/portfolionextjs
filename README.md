# holovin.com

Personal professional website of Viktor Holovin.

The site presents my background in industrial engineering, process improvement, digitalization, and software development.

It is built with Next.js and connects to a Java Spring Boot backend that provides structured portfolio data through a REST API.

The website is available in:

- English
- Italian

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Java
- Spring Boot
- Spring Security
- PostgreSQL
- REST API

---

## Architecture

The frontend and backend are separate applications.

Frontend:

```text
holovin.com
```

Backend API:

```text
api.holovin.com
```

The frontend retrieves structured data such as:

- professional experience
- education
- qualifications
- social profiles
- professional description
- current role

from the Spring Boot API.

---

## Languages

The website currently supports:

```text
/                 English
/experience       English
/education        English

/it               Italian
/it/experience    Italian
/it/education     Italian
```

The Italian version uses localized API fields where available, with English fallback values.

---

## API Integration

The public website retrieves the portfolio using the customer slug.

Example:

```text
GET /api/v1/customer/public/viktor-holovin
```

---

## Environment Variables

Create:

```text
.env.local
```

Example:

```env
SPRING_API_URL=https://api.holovin.com
CUSTOMER_SLUG=viktor-holovin
```

`.env.local` should not be committed to Git.

---

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
```

---

## SEO

The project includes:

- localized metadata
- canonical URLs
- hreflang alternatives
- sitemap.xml
- robots.txt
- Person JSON-LD structured data
- Open Graph metadata

---

## Professional Focus

The primary professional direction of the website is:

```text
Industrial Engineering
Process Improvement
Digitalization
```

Software development remains an important part of the profile and technical toolkit, including:

```text
Java
Spring Boot
PostgreSQL
REST APIs
Next.js
TypeScript
Linux
```

---

## Deployment

The frontend can be deployed to Vercel or another Node.js-compatible environment.

The backend is maintained separately as a Spring Boot application.

---

## License

This project is licensed under the MIT License.
