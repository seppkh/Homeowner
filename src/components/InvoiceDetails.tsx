
const InvoiceDetails = {
    inv001_1: {
      name: "Invoice nr 002-1501",
      location: "Köleri 6-1",
      fixedRent: 600,
      utilites: 230,
      extras: {
        amount: 50,
        reason: "for sauna rental"
      },
      total: 880,
      dueDate: "2022-06-12"
    },
    inv001_2: {
      name: "Invoice nr 002-1502",
      location: "Köleri 6-5",
      fixedRent: 550,
      utilites: 170,
      extras: {
        amount: 0,
        reason: ""
      },
      total: 720,
      dueDate: "2022-06-12"
    },
    inv001_3: {
      name: "Invoice nr 002-1503",
      location: "Köleri 6-7",
      fixedRent: 600,
      utilites: 250,
      extras: {
        amount: 180,
        reason: "for breaking the window"
      },
      total: 1030,
      dueDate: "2022-06-12"


    }
  }

export default InvoiceDetails;