import { Config } from "../types/Config";

export const configs: Config[] = [
  {
    id: "cfg-001",
    name: "MemberRegistration",
    version: 3,
    data: {
      allowRegistration: true,
      maxUsers: 100
    }
  },
  {
    id: "cfg-002",
    name: "NotificationConfig",
    version: 5,
    data: {
      emailEnabled: true,
      smsEnabled: false
    }
  }
];