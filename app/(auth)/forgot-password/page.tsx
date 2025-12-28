import ForgotClient from "./ForgotClient";

export default async function ForgotPasswordPage() {
  // trigger route loading
  await new Promise((r) => setTimeout(r, 600));

  return <ForgotClient />;
}
