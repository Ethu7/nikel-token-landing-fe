import { ContactFormData } from "@/types";

export function sendEmail(
  data: ContactFormData,
  onSuccess: (message: string) => void,
  onFailure: (err: any) => void
) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      onSuccess(response.message);
    })
    .catch((err) => {
      onFailure(err);
    });
}
