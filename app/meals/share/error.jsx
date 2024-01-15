'use client';
function ErrorPage({ error }) {
  return (
    <main className='error'>
      <h1>An error accured</h1>
      <p>Failed to create meal .{/* <span>{error.message}</span> */}</p>
    </main>
  );
}

export default ErrorPage;
