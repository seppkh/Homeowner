import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ContactDetails from '../components/ContactDetails';

interface ScanNewProps {
  aptCode: any;
} 

const Contacts: React.FC<ScanNewProps> = ({ aptCode }) => {
  
  const contacts: any = ContactDetails;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'/>
          </IonButtons>

          <IonTitle>Tenant Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacts</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <h2 >Currently in {contacts[aptCode].address}:</h2>

        <IonCard>
           
            <IonCardHeader>
              <IonAvatar >
                  <img src={contacts[aptCode].img} />
              </IonAvatar>
              <IonCardTitle>{contacts[aptCode].renterName}</IonCardTitle>
              <IonCardSubtitle>{contacts[aptCode].phone}</IonCardSubtitle>
              <IonCardSubtitle>{contacts[aptCode].email}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardSubtitle><strong>People: </strong> {contacts[aptCode].familySize}</IonCardSubtitle>
              <IonCardSubtitle><strong>Notes: </strong>{contacts[aptCode].notes}</IonCardSubtitle>
            </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Contacts;
