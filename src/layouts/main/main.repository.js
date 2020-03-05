export class MainRepository {
  async getIssue() {
    const response = await fetch("https://localhost:5001/api/issue");
    response.withCredentials = true;
    return await response.json();
  }
  async getIssueById(key) {
    const response = await fetch(`https://localhost:5001/api/issue/${key}`);
    response.withCredentials = true;
    return await response.json();
  }
  async getUsers() {
    const response = await fetch("https://localhost:5001/api/user");
    response.withCredentials = true;
    return await response.json();
  }
}
