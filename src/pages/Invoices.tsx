import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonButton, IonAvatar, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import InvoiceList from './InvoicesList';

const Invoices: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'/>
          </IonButtons>

          <IonTitle>Invoices</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Invoices</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Invoices</h2>

        <IonList >
          <InvoiceList />
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Invoices;
