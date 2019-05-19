import { Controller } from "stimulus"

export default class extends Controller {
  onPostSuccess(event) {
    let [data, status, xhr] = event.detail;
    this.element.innerHTML = xhr.response;
  }
}
