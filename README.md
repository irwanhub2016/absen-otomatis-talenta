# Guide to Running Absensi Automatis with Playwright

Follow the steps below to run automated tests using Playwright.

1. Clone the repository:
```
git clone https://github.com/irwanhub2016/absen-otomatis-talenta
```

2. Install the required dependencies:
```
cd absen-otomatis-talenta
npm install playwright
npm install axios
npm install dotenv
```

3. Create or copy a `.env` file and fill in the following information:
```
EMAIL=your_email@example.com
PASSWORD=your_password
```

4. Run the tests:
    - To run the test for clocking in, use the following command:
    ```
    npx playwright test --grep @clockin
    ```

    - To run the test for clocking out, use the following command:
    ```
    npx playwright test --grep @clockout
    ```

That's it, Happy testing!
