export type OwnFirst = {
  createdAt: Date;
  id: string;
  name: string | null;
  status?: "Active" | "Inactive" | null;
  updatedAt: Date;
};
