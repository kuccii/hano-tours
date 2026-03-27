const BASE_URL = "https://api.flutterwave.com/v3";

function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
  };
}

export async function initializeFlutterwavePayment(payload: {
  tx_ref: string;
  amount: number;
  currency: string;
  redirect_url: string;
  customer: { email: string; name: string };
  customizations: { title: string; description: string };
}) {
  const response = await fetch(`${BASE_URL}/payments`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Flutterwave init failed: ${await response.text()}`);
  }

  return response.json();
}

export async function verifyFlutterwaveTransaction(transactionId: string) {
  const response = await fetch(`${BASE_URL}/transactions/${transactionId}/verify`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Flutterwave verify failed: ${await response.text()}`);
  }

  return response.json();
}
