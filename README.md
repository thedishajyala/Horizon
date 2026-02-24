# 🏦 Horizon — Financial SaaS Banking Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=for-the-badge&logo=tailwindcss)
![Appwrite](https://img.shields.io/badge/Appwrite-Cloud-fd366e?style=for-the-badge&logo=appwrite)
![Plaid](https://img.shields.io/badge/Plaid-Banking-00c281?style=for-the-badge)

**A modern, full-stack banking application built with Next.js 14.**  
Connect multiple bank accounts, track real-time transactions, transfer money, and manage your finances — all in one place.

</div>

---

## ✨ Features

- 🔐 **Secure Authentication** — Sign up and sign in with Appwrite-powered auth including SSN & identity verification
- 🏦 **Multi-Bank Integration** — Connect multiple bank accounts via Plaid (Chase, Bank of America, Wells Fargo, and more)
- 💸 **Money Transfers** — Send funds between connected accounts using the Dwolla payment network
- 📊 **Transaction History** — Browse paginated, filterable transaction history per account
- 📈 **Spending Analytics** — Doughnut chart visualization of spending by category
- 💳 **Bank Cards View** — Beautiful card-based display of all connected accounts
- 🌗 **Dark Mode** — Toggle between light and dark themes with `next-themes`
- 🎯 **Budget Goals** — Set per-category spending limits with live progress bars
- 🔔 **Transaction Alerts** — Toast notifications powered by `sonner` for large incoming transactions
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Auth & Database** | Appwrite Cloud |
| **Banking API** | Plaid |
| **Payments** | Dwolla |
| **Forms** | React Hook Form + Zod |
| **Charts** | Chart.js + react-chartjs-2 |
| **Notifications** | Sonner |
| **Theming** | next-themes |
| **Monitoring** | Sentry |

---

## 📂 Project Structure

```
horizon/
├── app/
│   ├── (auth)/          # Sign-in and Sign-up pages
│   └── (root)/          # Dashboard, My Banks, Payment Transfer, Transaction History
├── components/          # Reusable UI components
│   ├── AuthForm.tsx
│   ├── BankCard.tsx
│   ├── DoughnutChart.tsx
│   ├── PaymentTransferForm.tsx
│   ├── PlaidLink.tsx
│   ├── DarkModeToggle.tsx
│   └── ...
├── lib/
│   ├── actions/         # Server actions (user, bank, transaction)
│   └── utils.ts
├── constants/           # App-wide constants
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- [Appwrite](https://cloud.appwrite.io) account
- [Plaid](https://dashboard.plaid.com) developer account (Sandbox)
- [Dwolla](https://dashboard.dwolla.com) developer account (Sandbox)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/horizon.git
cd horizon
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# NEXT
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_USER_COLLECTION_ID=your_user_collection_id
APPWRITE_ITEM_COLLECTION_ID=your_item_collection_id
APPWRITE_BANK_COLLECTION_ID=your_bank_collection_id
APPWRITE_TRANSACTION_COLLECTION_ID=your_transaction_collection_id
NEXT_APPWRITE_KEY=your_api_key

# PLAID
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=US

# DWOLLA
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

### 4. Set Up Appwrite

In your Appwrite project, create a database with the following collections:

- **Users** — stores sign-up profile info
- **Banks** — stores linked Plaid bank items
- **Transactions** — stores fund transfer records

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Sandbox Testing Credentials

### Bank Connection (Plaid)

| Field | Value |
|---|---|
| Username | `user_good` |
| Password | `pass_good` |

### Sign-Up Test Data (use exact values for Dwolla Sandbox)

| Field | Value |
|---|---|
| Address | `123 Main St` |
| City | `New York` |
| State | `NY` |
| Postal Code | `10001` |
| SSN (last 4) | `1234` |
| Date of Birth | Any valid past date |

---

## 🌗 Dark Mode

Horizon supports full dark/light mode toggling using `next-themes`. The toggle is accessible from the sidebar footer.

---

## 📊 Budget Goals

Set custom spending limits per category (Food, Travel, Shopping, etc.) from the **My Banks** or **Transaction History** pages. Progress bars update in real-time based on your current transactions.

---

## 🔔 Transaction Alerts

Horizon automatically surfaces toast alerts via `sonner` whenever a large transaction (above a configurable threshold) is detected on any connected account.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Built with ❤️ by <strong>Disha</strong>
</div>
