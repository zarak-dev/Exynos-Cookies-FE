export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode?: string;
}

export type PaymentMethod = "cod" | "card";