export async function onRequest({ env }) { 
  const redirect = new URL("https://github.com/login/oauth/authorize");
  redirect.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  redirect.searchParams.set("scope", "repo,user");
  redirect.searchParams.set("redirect_uri", `${env.BASE_URL}/api/auth/callback`);

  return Response.redirect(redirect.toString(), 302);
}
