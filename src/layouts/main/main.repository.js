export class MainRepository {
  async getIssue() {
    const response = await fetch("https://localhost:5001/api/issue");
    return await response.json();
  }
  async getIssueById(key) {
    const response = await fetch(`https://localhost:5001/api/issue/${key}`);
    return await response.json();
  }
}
