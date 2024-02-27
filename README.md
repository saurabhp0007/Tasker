<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Project Name - README</title>
</head>
<body>

  <h1>Your Project Name</h1>

  <h2>Local Development Setup</h2>

  <p>To run this project locally, you need to set up two configuration files:</p>

  <h3>1. <code>.env.local</code></h3>

  <p>Create a file named <code>.env.local</code> in the root directory of your project and add the following configuration:</p>

  <pre>
    <code>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YXJ0aXN0aWMtc25haWwtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_TxTtMJ2R7AhKlgzDjMOxVUqjfL95vSnn7r5UEoiwO4

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin
    </code>
  </pre>

  <h3>2. <code>.env</code></h3>

  <p>Create another file named <code>.env</code> in the root directory of your project for server-side environment variables. Add the following configuration:</p>

  <pre>
    <code>
DATABASE_URL="mongodb+srv://saurabhpanday21212:Nohdt4LZlZTikzUl@cluster1.rdnnojw.mongodb.net/TASKER?retryWrites=true&amp;w=majority"
    </code>
  </pre>

  <h2>Running Locally</h2>

  <ol>
    <li>Clone this repository.</li>

    <pre>
      <code>
git clone https://github.com/your-username/your-project.git
cd your-project
      </code>
    </pre>

    <li>Install dependencies.</li>

    <pre>
      <code>
npm install
# or
yarn install
      </code>
    </pre>

    <li>Start the development server.</li>

    <pre>
      <code>
npm run dev
# or
yarn dev
      </code>
    </pre>
  </ol>

  <p>The project should now be running locally. Access it in your web browser at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>

  <p>Feel free to customize this README to include any additional setup steps or information specific to your project.</p>

</body>
</html>

