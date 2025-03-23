import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export interface MockResponse<T> {
  data: T;
}

const mock = new MockAdapter(axios);

export default mock;
