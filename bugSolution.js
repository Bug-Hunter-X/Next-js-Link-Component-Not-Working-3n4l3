```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;

// Ensure that you have the pages/index.js and pages/about.js files correctly set up.
// pages/index.js

export default function Home(){
  return <h1>Home Page</h1>;
}

//pages/about.js

export default function About(){
  return <h1>About Page</h1>;
}
```