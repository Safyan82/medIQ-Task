
enum status {
    UNVERIFIED,
    REFUNDED,
    CANCELLED,
    VERIFIED,
    FULFILLED,
  }
  
  type OrderStatus = keyof typeof status;
  
 export interface orderType {
    orderID?: string;
    orderStatus: OrderStatus;
    companyName?: string;
    customerName?: string;
    purDate?: string;
    fulfillDate?: string;
    invoiceStatus?: "Paid" | "Unpaid",
    amount?: number;
    currency?: string;
  }
  
  export const orderData : orderType[] = [
    {
      orderID: "2544",
      orderStatus: "VERIFIED",
      companyName: "GARDSBUA AS",
      customerName: "John Doe",
      purDate: "26 Jan 2022",
      fulfillDate: "28 Jan 2022",
      invoiceStatus: "Paid",
      amount: 250,
      currency: "NOK"
    }, {
      orderID: "2541",
      orderStatus: "UNVERIFIED",
      companyName: "GARDSBUA AS",
      customerName: "John Doe",
      purDate: "26 Jan 2022",
      fulfillDate: "26 Jan 2022",
      invoiceStatus: "Paid",
      amount: 400,
      currency: "NOK"
    }, {
      orderID: "2540",
      orderStatus: "REFUNDED",
      companyName: "GARDSBUA AS",
      customerName: "John Doe",
      purDate: "27 Jan 2022",
      fulfillDate: "27 Jan 2022",
      invoiceStatus: "Paid",
      amount: 630,
      currency: "PKR"
    }, {
      orderID: "2324",
      orderStatus: "CANCELLED",
      companyName: "GARDSBUA AS",
      customerName: "John Doe",
      purDate: "28 Jan 2022",
      fulfillDate: "1 Feb 2022",
      invoiceStatus: "Paid",
      amount: 400,
      currency: "USD"
    }, 
    {
      orderID: "6844",
      orderStatus: "FULFILLED",
      companyName: "SMITH CLINIC",
      customerName: "JAMES JOHNS",
      purDate: "1 Feb 2022",
      invoiceStatus: "Unpaid",
      amount: 400,
      currency: "USD"
    }, 
    {
      orderID: "6845",
      orderStatus: "UNVERIFIED",
      companyName: "SMITH CLINIC",
      customerName: "JAMES JOHNS",
      purDate: "1 Feb 2022",
      fulfillDate: "5 Feb 2022",
      invoiceStatus: "Unpaid",
      amount: 400,
      currency: "USD"
    }
  ]