async function saveToLocal(data) {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem("userPosts", jsonData);
        console.log("Posts saved successfully to localStorage.");
    } catch (error) {
        console.error("Error saving posts to localStorage:", error);
    }
}

export default saveToLocal;