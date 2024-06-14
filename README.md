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

To hardcode the latitude and longitude values in the `{ latitude, longitude } = await getGeolocation()` example, you can modify the code as follows:

```javascript
// Hardcoded latitude and longitude values
const latitude = -62434;
const longitude = 1054.3434;

// Assigning hardcoded values to latitude and longitude variables
{ latitude, longitude } = { latitude, longitude };

// Using the hardcoded values in the getGeolocation() function
const { latitude, longitude } = await getGeolocation();
```

By assigning the hardcoded latitude and longitude values to the respective variables before calling the `getGeolocation()` function, you can ensure that the function uses the specified values instead of retrieving them dynamically.

Remember to replace the existing code with the modified version in your test script.

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