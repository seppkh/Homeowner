import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InvoiceDetails from '../components/InvoiceDetails';

const InvoiceList = () => {

  const invoices: any = InvoiceDetails;
  return <>{
    Object.entries(invoices).map(([key, data]) => (
      <IonItemSliding>
        
        <IonItem>
          <IonLabel>
            <h1>{invoices[key].name}</h1>
            <p>Location: {invoices[key].location}</p>
            <p>Due: {invoices[key].dueDate}</p>

            <ul>
            <li>
              <p>Fixed rent: {invoices[key].fixedRent} €</p>
            </li>
            <li>
              <p>Utilities: {invoices[key].utilites} €</p>
              </li>
            <li>
              <p>Extras: {invoices[key].extras.amount} € {invoices[key].extras.reason}</p>
            </li>
            </ul>
            <h2><strong>Total: {invoices[key].total} €</strong></h2>

          </IonLabel>
        </IonItem>
        <IonItemOptions side="start">
          <IonItemOption color={"success"} onClick={() => {}}>Mark as paid</IonItemOption>
        </IonItemOptions>
        <IonItemOptions side="end">
          <IonItemOption color={"danger"} onClick={() => {}}>Archive</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      
      ))
    }</>
}

export default InvoiceList;
