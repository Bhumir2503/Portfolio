# Bhumir Patel

Portfolio site for Bhumir Patel, a software developer. It is a dark-mode Next.js app served at [bhumir.com](https://bhumir.com).

The home page has a hero, about, technologies, education, selected work, and a contact form. Selected work links to pages for FormQuarry, Journpath, Exerkin, and Maze Gen Solver.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The Resume button downloads `/resume.pdf`. Add that file at `public/resume.pdf`.

## Production

Caddy accepts traffic for `bhumir.com` and `www.bhumir.com`, handles HTTPS, and proxies to the Next.js server. The app is not published on its own port.

Point both names at the server, then:

```bash
docker compose up -d --build
```

Ports 80 and 443 need to be open so Caddy can issue certificates.
