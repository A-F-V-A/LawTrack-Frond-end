import { Role } from "./Role";

export interface Customer {
    id: string | null;
    name: string;
    lastName: string;
    IdentificationCard: string;
    role: Role;
}