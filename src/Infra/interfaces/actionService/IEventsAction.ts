export interface IEventsAction {
  getEvents(searchCriteria: any);
  getSectors(searchCriteria: any);
  getPlanimetry(searchCriteria: any);
  registerPayment(paymentData: any);
  getPayment(paymentId: any);
}
