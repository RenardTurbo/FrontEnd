export class MainRepository {
  async getIssue() {
    const response = await fetch("https://localhost:5001/api/issue");
    return await response.json();
  }
  async getIssueById(id) {
    const response = await fetch(`https://localhost:5001/api/issue/${id}`);
    return await response.json();
  }
}
