import { SESClient } from "@aws-sdk/client-ses";

const REGION = process.env.SES_REGION;
const sesClient = new SESClient({
  region: REGION,
});

export { sesClient };
