// File: /netlify/edge-functions/ssr-page.ts

export default async (request: Request) => {
    const html = `
      <html>
        <head><title>SSR Page</title></head>
        <body>
          <h1>Hello from Edge Function!</h1>
          <p>Time: ${new Date().toISOString()}</p>
        </body>
      </html>
    `;
  
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  };
  