import api from "Api";

export const listAllEvents = () => {
    return api.get("/api/event");
}