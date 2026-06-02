import type { Metadata } from "next";
import { AdminDashboard } from "./admin-dashboard";

export const metadata: Metadata = {
  title: "Panel administratora | Kraśnik Solar Flex Park",
  description: "Panel administracyjny i raport odwiedzin strony Kraśnik Solar Flex Park."
};

export default function AdminPage() {
  return <AdminDashboard />;
}

