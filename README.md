# Horizon - Financial SaaS Platform

Horizon is a modern banking platform that connects to multiple bank accounts, displays real-time transactions, and facilitates money transfers between users.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication & Database:** Appwrite
- **Banking Integration:** Plaid & Dwolla
- **Form Handling:** React Hook Form + Zod

## ⚙️ Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/horizon.git
    cd horizon
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add the following keys:
    ```env
    # NEXT
    NEXT_PUBLIC_SITE_URL=http://localhost:3000

    # APPWRITE
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT=
    NEXT_APPWRITE_KEY=

    # PLAID
    PLAID_CLIENT_ID=
    PLAID_SECRET=
    PLAID_ENV=sandbox
    PLAID_PRODUCTS=auth,transactions,identity
    PLAID_COUNTRY_CODES=US

    # DWOLLA
    DWOLLA_KEY=
    DWOLLA_SECRET=
    DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
    DWOLLA_ENV=sandbox
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🧪 Testing Credentials (Sandbox)

- **Plaid Bank Login:**
    - User: `user_good`
    - Password: `pass_good`

- **Sign Up Data (Use strict Sandbox data):**
    - Address: `123 Main St`
    - City: `New York`
    - State: `NY`
    - Postal Code: `10001`
    - SSN: `1234`
    - Date of Birth: `YYYY-MM-DD`
