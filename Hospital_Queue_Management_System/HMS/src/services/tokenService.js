const API_BASE_URL = "http://localhost:8081/api/tokens";
const IS_MOCK = false; // SET TO 'false' TO USE THE SPRING BOOT BACKEND

const MOCK_DATA = [
    { id: 1, tokenNumber: "T-1", type: "ONLINE", status: "WAITING", department: "General" },
    { id: 2, tokenNumber: "T-2", type: "WALK-IN", status: "WAITING", department: "General" }
];

export const TokenService = {
    // Fetch all waiting tokens for the Doctor/Dashboard view
    getWaitingTokens: async () => {
        if (IS_MOCK) return MOCK_DATA;

        const response = await fetch(`${API_BASE_URL}/status/WAITING`);
        return await response.json();
    },

    // Generate a new token (Kiosk or Online Booking)
    generateToken: async (type, patientId, department) => {
        if (IS_MOCK) {
            console.log("Mocking token generation for:", type);
            return { tokenNumber: "T-99", type, status: "WAITING" };
        }

        const response = await fetch(`${API_BASE_URL}/generate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type, patientId, department })
        });
        return await response.json();
    },

    // Call a patient (Updates status to IN_PROGRESS or COMPLETED)
    updateTokenStatus: async (tokenId, newStatus) => {
        if (IS_MOCK) return { id: tokenId, status: newStatus };

        const response = await fetch(`${API_BASE_URL}/${tokenId}/status?status=${newStatus}`, {
            method: "PATCH"
        });
        return await response.json();
    }
};