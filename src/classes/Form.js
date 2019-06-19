import HttpService from '@/services/HttpService';

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

  submit(method) {
    return HttpService[method]( this.data() );
  }

  onSuccess() {
    this.reset();
  }
}
