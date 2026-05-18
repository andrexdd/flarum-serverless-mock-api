# Flarum Serverless Mock API & Live SSE Stream Engine

A high-performance, 100% serverless, zero-database mock API generator and Server-Sent Events (SSE) stream simulator designed natively for Flarum ecosystems. 

Turn your forum instance into a lightweight playground for developers without adding a single byte of overhead to your production database.

---

## ⚡ The Architecture: Why Zero-DB?

Most developer utility extensions choke the core infrastructure with unnecessary migrations, custom data tables, and heavy read/write loads. This engine completely bypasses the persistence layer. 

By encrypting and packing the user-generated JSON payloads directly into parameter-driven query strings, the system guarantees:
* **Zero Database Contention:** Zero hits to your MySQL/PostgreSQL instances.
* **Instant Disposability:** Endpoints live natively inside the URL logic—perfect for quick frontend prototyping, mobile app network layer testing, and simulating server lag on the fly.

---

## 🚀 Key Features

* **Instant Mock Endpoints:** Pass encrypted JSON representations straight through query parameters.
* **Live SSE Stream Simulation (`&stream=true`):** Dynamically switches the connection state to a persistent `text/event-stream`, forcing chunked object emissions every 1000ms.
* **Network Latency Simulation (`&delay=3000`):** Simulates real-world server stress or heavy lag states to rigorously test client-side skeleton loaders and spinner behaviors.
* **Status Code Forcing (`&status=401`):** Simulates explicit network layer errors (e.g., 401 Unauthorized, 500 Internal Server Error) to audit client catch handling.

---

## 🛠️ Production Installation & Compilation

Since this extension hooks into Flarum's native Mithril.js frontend stack and relies on the core webpack engine, you need to compile the assets locally before deploying to your runtime framework.

### 1. Clone & Place the Assets
Drop the extension files directly into your Flarum root installation directory under `workbench/andresoftware-mock-api` or symlink it accordingly.

### 2. Compile Frontend Bundles
Navigate to the JavaScript distribution context and build the production bundles:
```bash
cd js
npm install
npm run build
This forces webpack to optimize and compile the reactive components straight into your localized js/dist/forum.js target.

3. Boot It Up
Go to your Flarum Extension Manager inside the Admin Control Panel, locate Mock API Playground, toggle the activation switch, and navigate directly to:

Plaintext
[https://yourforum.com/mock-api](https://yourforum.com/mock-api)
🔒 Security & Privacy Notice
Because this tool relies strictly on cryptography baked into the client-side URI structure, no developer data, proprietary payloads, or test variables are parsed or stored server-side. Your sandboxed environment remains entirely isolated within your runtime container.

👨‍💻 Author & Maintainer
Crafted with passion for the global open-source community.

Lead Architect: Andre Software

Community Hub: www.fikiral.net.tr

Feel free to open an issue, submit a PR, or join the discussion on our main forum if you want to help expand this engine with custom JSON schema validations!