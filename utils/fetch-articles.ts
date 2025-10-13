export function fetchArticles(
  onSuccess: (items: any[]) => void,
  onFailure: (err: any) => void
) {
  const apiEndpoint = "/api/rss";

  fetch(apiEndpoint)
    .then((res) => res.json())
    .then((response) => {
      onSuccess(response);
    })
    .catch((err) => {
      onFailure(err);
    });
}
