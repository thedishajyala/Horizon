<div align="center">

<br />

<img src="public/icons/logo.svg" alt="Horizon Logo" width="80" height="80" />

# 🏦 Horizon

### A Modern Financial SaaS Banking Platform

<p align="center">
  <strong>Connect your banks. Monitor spending. Transfer money. All in one place.</strong>
</p>

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Cloud-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![Plaid](https://img.shields.io/badge/Plaid-Banking_API-00C281?style=for-the-badge)](https://plaid.com/)
[![Dwolla](https://img.shields.io/badge/Dwolla-Payments-FF7900?style=for-the-badge)](https://www.dwolla.com/)
[![Sentry](https://img.shields.io/badge/Sentry-Monitoring-362D59?style=for-the-badge&logo=sentry&logoColor=white)](https://sentry.io/)

<br />

![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![Built By](https://img.shields.io/badge/Built%20by-Disha-blueviolet?style=flat-square)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Appwrite Setup](#-appwrite-setup)
- [Sandbox Testing](#-sandbox-testing)
- [Novelty Features](#-novelty-features)
- [License](#-license)

---

## 🌟 Overview

**Horizon** is a full-stack financial SaaS application built with **Next.js 14 App Router** and TypeScript. It lets users securely connect multiple real bank accounts via **Plaid**, view live transaction history, transfer money between accounts using **Dwolla**, and get deep spending insights — all wrapped in a clean, responsive UI.

Whether you're tracking finances across Chase, Bank of America, or Wells Fargo — Horizon brings everything into one unified dashboard.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Secure Authentication** | Appwrite-powered sign up & sign in with SSN & identity verification |
| 🏦 **Multi-Bank Integration** | Connect multiple real bank accounts via Plaid Link |
| 💸 **Money Transfers** | Send funds between linked accounts using Dwolla |
| 📊 **Spending Analytics** | Doughnut chart breakdown of spending by category |
| 📋 **Transaction History** | Paginated, per-account filterable transaction tables |
| 💳 **Bank Cards View** | Card-style display of all connected accounts |
| 🌗 **Dark Mode** | Full light/dark theme toggle via `next-themes` |
| 🎯 **Budget Goals** | Per-category spending limits with live progress bars |
| 🔔 **Transaction Alerts** | Toast alerts for large transactions via `sonner` |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile screens |
| 🛡️ **Error Monitoring** | Integrated Sentry for real-time error tracking |

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router + Server Actions) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **Auth & Database** | [Appwrite Cloud](https://appwrite.io/) |
| **Banking API** | [Plaid](https://plaid.com/) |
| **Payments** | [Dwolla](https://www.dwolla.com/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Charts** | [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Monitoring** | [Sentry](https://sentry.io/) |

---

## 📂 Project Structure

```
horizon/
├── app/
│   ├── (auth)/                   # Authentication pages
│   │   ├── sign-in/              # Sign-in page
│   │   └── sign-up/              # Sign-up page
│   ├── (root)/                   # Protected app pages
│   │   ├── page.tsx              # Dashboard (home)
│   │   ├── my-banks/             # All connected banks
│   │   ├── payment-transfer/     # Send money
│   │   └── transaction-history/  # Full transaction log
│   ├── globals.css               # Global styles & dark mode vars
│   └── layout.tsx                # Root layout
│
├── components/
│   ├── AuthForm.tsx              # Sign up / sign in form
│   ├── BankCard.tsx              # Bank account card UI
│   ├── BankDropdown.tsx          # Bank selector dropdown
│   ├── BudgetModal.tsx           # Budget goal setter
│   ├── DarkModeToggle.tsx        # Light / dark theme toggle
│   ├── DoughnutChart.tsx         # Spending analytics chart
│   ├── PaymentTransferForm.tsx   # Money transfer form
│   ├── PlaidLink.tsx             # Plaid Link integration
│   ├── TransactionAlert.tsx      # Large transaction toasts
│   ├── TransactionsTable.tsx     # Paginated transaction table
│   └── ...
│
├── lib/
│   ├── actions/
│   │   ├── user.actions.ts       # Auth & user management
│   │   ├── bank.actions.ts       # Plaid bank CRUD
│   │   ├── transaction.actions.ts# Transaction fetching
│   │   └── dwolla.actions.ts     # Dwolla payment logic
│   ├── budget.ts                 # Budget localStorage helpers
│   ├── appwrite.ts               # Appwrite client setup
│   ├── plaid.ts                  # Plaid client setup
│   └── utils.ts                  # Shared utilities
│
├── constants/                    # App-wide constants
├── types/                        # TypeScript interfaces
└── public/                       # Static assets & icons
```

---

## ⚙️ Getting Started

### Prerequisites

Before running Horizon, make sure you have:

- **Node.js 18+** installed
- An **[Appwrite Cloud](https://cloud.appwrite.io)** account
- A **[Plaid](https://dashboard.plaid.com)** developer account (Sandbox mode)
- A **[Dwolla](https://dashboard.dwolla.com)** developer account (Sandbox mode)

---

### 1. Clone the Repository

```bash
git clone https://github.com/thedishajyala/Horizon.git
cd Horizon
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file at the root of the project (see [Environment Variables](#-environment-variables) below).

### 4. Configure Appwrite

Set up your Appwrite database (see [Appwrite Setup](#-appwrite-setup) below).

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. ✅

---

## 🔑 Environment Variables

Create a `.env` file at the project root with the following variables:

```env
# ─── NEXT ────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# ─── APPWRITE ────────────────────────────────────────
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_USER_COLLECTION_ID=your_user_collection_id
APPWRITE_ITEM_COLLECTION_ID=your_item_collection_id
APPWRITE_BANK_COLLECTION_ID=your_bank_collection_id
APPWRITE_TRANSACTION_COLLECTION_ID=your_transaction_collection_id
NEXT_APPWRITE_KEY=your_api_key

# ─── PLAID ───────────────────────────────────────────
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=US

# ─── DWOLLA ──────────────────────────────────────────
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

> **Tip:** Copy `.env.example` as a starting point: `cp .env.example .env`

---

## 🗄️ Appwrite Setup

In your Appwrite project, create a **database** with these collections:

| Collection | Purpose |
|---|---|
| **Users** | Stores user profile info (name, address, SSN, DOB) |
| **Banks** | Stores linked Plaid bank items (access tokens, account IDs) |
| **Transactions** | Stores fund transfer records created via Dwolla |

> Make sure collection attributes match the schemas in `lib/actions/user.actions.ts` and `lib/actions/bank.actions.ts`.

---

## 🧪 Sandbox Testing

### Plaid Bank Connection

| Field | Value |
|---|---|
| Username | `user_good` |
| Password | `pass_good` |

### Sign-Up Test Data *(required for Dwolla Sandbox)*

| Field | Required Value |
|---|---|
| Address | `123 Main St` |
| City | `New York` |
| State | `NY` |
| Postal Code | `10001` |
| SSN (last 4 digits) | `1234` |
| Date of Birth | Any valid past date |

> ⚠️ **Important:** Use these exact values when signing up in sandbox mode, or Dwolla customer creation will fail.

---

## 🎨 Novelty Features

### 🌗 Dark Mode
Full light/dark theme toggle powered by `next-themes`.  
Access the toggle from the **sidebar footer** — theme preference is persisted across sessions.

### 🎯 Budget Goals
Set custom monthly spending limits per category (Food, Travel, Entertainment, Shopping, etc.).  
Live **progress bars** reflect your current spending against each goal in real-time.  
Goals are stored in `localStorage` — no backend required.

### 🔔 Transaction Alerts
Horizon automatically fires **toast notifications** via `sonner` whenever a large transaction is detected on any connected account.  
The alert threshold is configurable in `components/TransactionAlert.tsx`.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to fork, star ⭐, and build on it!

---

<div align="center">

Made with ❤️ by **[Disha](https://github.com/thedishajyala)**

<br />
