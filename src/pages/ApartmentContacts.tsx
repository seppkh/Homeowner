import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ContactList from './ContactsList';


const AllContacts: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'/>
          </IonButtons>

          <IonTitle>All Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">All Contacts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>All Contacts</h2>
        <IonList >
          <ContactList />
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default AllContacts;
