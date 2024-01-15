'use client';
function ErrorPage({ error }) {
  return (
    <main className='error'>
      <h1>An error accured</h1>
      <p>
        Failed to fetch meal data.
        {/* <span>{error.message}</span> */}
      </p>
    </main>
  );
}

export default ErrorPage;
