export interface LeadData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  try {
    // Primary endpoint: /send-lead.php
    const response = await fetch('/send-lead.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      throw new Error(errJson.error || `Server responded with ${response.status}`);
    }

    await response.json();
    return { success: true };
  } catch (err: any) {
    console.error('Lead submission error:', err);
    return { success: false, error: err?.message || 'Failed to send message.' };
  }
}
