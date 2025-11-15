export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: new URLSearchParams({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${env.BASE_URL}/api/auth/callback`,
    }),
  });

  const data = await tokenResponse.json();

  return new Response(
    JSON.stringify({ token: data.access_token }),
    { headers: { "Content-Type": "application/json" } }
  );
}
