export default async (request: Request) => {
  return new Response("Hello from Edge Function!", {
    headers: { "Content-Type": "text/plain" },
  });
};
