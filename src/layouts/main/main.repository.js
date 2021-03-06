export class MainRepository {
  async getIssue() {
    const response = await fetch("https://localhost:5001/api/issue");

    return await response.json();
  }
  async getIssueById(key) {
    const response = await fetch(`https://localhost:5001/api/issue/${key}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await response.json();
  }
  async getUsers() {
    const response = await fetch("https://localhost:5001/api/user");
    return await response.json();
  }
}
