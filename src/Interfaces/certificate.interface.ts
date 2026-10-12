export interface ICertificate {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
}
