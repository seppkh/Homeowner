import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import './Metrics.css';

const Metrics: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'/>
          </IonButtons>
          <IonTitle>Metrics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Metrics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Metrics</h2>

        <IonCard color={"success"} className="ion-card">
          <IonCardHeader>
            Electricity usage graph across locations
          </IonCardHeader>
          <IonCardContent>

          </IonCardContent>
        </IonCard>

        <IonCard color={"warning"} className="ion-card">
        <IonCardHeader>
            Water usage graph across locations
          </IonCardHeader>
          <IonCardContent>

          </IonCardContent>
        </IonCard>

        <IonCard color={"danger"} className="ion-card">
        <IonCardHeader>
            Another graph to show some stats about locations/contacts
          </IonCardHeader>
          <IonCardContent>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Metrics;
