import { role } from "../userModel";

export const mockRoles: role[] = [
    {
        "key": "superadmin",
        "name": "Super Admin",
        "description": "Supervises admin and his activities."
    },
    {
        "key": "admin",
        "name": "Admin",
        "description": "Manages all work."
    },
    {
        "key": "subscriber",
        "name": "Subscriber",
        "description": "Subscribed for services."
    }
];

export const mockRoleByKey = {
    "key": "admin",
    "name": "Admin",
    "description": "Manages all work."
};