export default class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }
  }

  data() {
    let data = {};

    for (let property in this.originalData) {
      data[property] = this[property];
    }

    return data;
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }
  }

  post(url) {
    return this.submit('post', url);
  }

  submit(requestType, url) {
    alert(requestType + url);
  }

  onSuccess(data) {
    alert(data.message);
    this.reset();
  }
}
