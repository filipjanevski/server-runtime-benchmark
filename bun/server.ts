export default {
  port: 8000,
  fetch(request: Request): Response {
    return new Response("Hello World!");
  },
};
