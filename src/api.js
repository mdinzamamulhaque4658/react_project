export async function uploadResume(file) {
    const formData = new FormData();
    formData.append("resume", file);

    try {
        const response = await fetch("http://127.0.0.1:5000/analyze", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log("Server Response:", data); // ✅ Debugging log
        return data;
    } catch (error) {
        console.error("❌ API Error:", error);
        return { error: "Failed to connect to server." };
    }
}

