export default async (request: Request) => {
    return new Response("Hello from the edge!", {
      headers: { "Content-Type": "text/plain" },
    });
  };
  