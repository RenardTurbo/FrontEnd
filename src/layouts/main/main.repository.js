export class MainRepository {
  async getIssue() {
    const response = await fetch("http://localhost/api/issue");
    return await response.json();
  }
  async getIssueById(id) {
    const response = await fetch(`http://localhost/api/issue/${id}`);
    return await response.json();
  }
}
