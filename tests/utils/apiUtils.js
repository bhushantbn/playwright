export class apiUtils {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }
  async getToken() {
    const loginResponse = await apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: this.loginPayload,
      }
    );
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJSON = await loginResponse.json();
    token = loginResponseJSON.token;
    console.log(token);
    return token;
  }
  async createOrder(orderPayLoad) {
    let response = {};
    response.token = await this.getToken();
    const orderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: orderPayload,
        headers: {
          Authorization: response.getToken(),
          "Content-type": "application/json",
        },
      }
    );
    return response;
  }
}
