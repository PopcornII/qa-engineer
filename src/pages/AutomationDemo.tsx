// Automation demo page (no React default import needed with new JSX transform)
import MobilePlayback from "../components/MobilePlayback";

export default function AutomationDemo() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Automation Demo</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This demo page contains short runnable snippets and examples that showcase the types of automation
          artifacts you maintain: sample WebdriverIO snippet, Appium example, a simple k6 performance script
          and a Postman collection example. These are examples for documentation and demonstration.
        </p>

        <MobilePlayback />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">WebdriverIO (example)</h2>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
            {`// wdio example (pseudo)
              describe('Login flow', () => {
                it('should login and show dashboard', async () => {
                  await browser.url('/login');
                  await $('#email').setValue('user@example.com');
                  await $('#password').setValue('password');
                  await $('#submit').click();
                  await expect($('#dashboard')).toBeDisplayed();
                });
              });
            `}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Appium (mobile UI example)</h2>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
            {`// Appium example (pseudo)
const caps = {
  platformName: 'Android',
  deviceName: 'Pixel_4_API_30',
  app: '/path/to/app.apk',
};

driver.init(caps);
await driver.elementByAccessibilityId('login').click();
await driver.elementById('email').sendKeys('user@example.com');
await driver.elementById('password').sendKeys('password');
await driver.elementById('submit').click();`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">k6 (performance, example)</h2>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
            {`import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://api.example.com/health');
  sleep(1);
}`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Postman / Newman (collection example)</h2>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
            {`{
  "info": { "name": "Payment Gateway Tests", "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" },
  "item": [
    { "name": "Create transaction", "request": { "method": "POST", "url": "https://api.example.com/tx" } }
  ]
}`}
          </pre>
        </section>

        <p className="text-sm text-gray-500">Note: these are documentation examples only — use your CI and local tooling to run live tests.</p>
      </div>
    </main>
  );
}
