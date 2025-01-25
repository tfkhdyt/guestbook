import "@getcronit/pylon";
import { Session } from "hono-sessions";

type SessionDataTypes = {
  id: number;
};

declare module "@getcronit/pylon" {
  interface Bindings {}

  interface Variables {
    userId?: number; 

    session: Session<SessionDataTypes>;
    session_key_rotation: boolean;
  }
}
