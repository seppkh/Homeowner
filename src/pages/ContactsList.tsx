import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ContactDetails from '../components/ContactDetails';

const ContactList = () => {

  const contacts: any = ContactDetails;
  return <>{
    Object.entries(contacts).map(([key, data]) => (
      <IonItem>
        <IonAvatar slot='start'>
          <img src={contacts[key].img} />
        </IonAvatar>
        <IonLabel>
          <h1>{contacts[key].renterName}</h1>
          <h3>{contacts[key].phone}</h3>
          <h3>{contacts[key].email}</h3>
          <p>{contacts[key].address}</p>
        </IonLabel>
      </IonItem>
      ))
    }</>
}

export default ContactList;
