import { STRING_LITERAL_DROP_BUNDLE } from "next/dist/shared/lib/constants";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], string> = {
  public: "secondary",
  admin: "destructive",
};
