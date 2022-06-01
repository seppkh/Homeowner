import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';

const Apartments: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apartments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apartments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Apartments</h2>
        <IonList >
          <IonItem>
            <IonAvatar slot='start'>
              <img src="https://kv.img-bcg.eu/image/object/34/9027/31649027.jpg" />
            </IonAvatar>
            <IonLabel>
              <h1>Köleri 6-1</h1>
              <h3>Sqr: 65 m2</h3>
              <h3>Rent: 600 € per month</h3>
              <p>Without parking spot</p>
            </IonLabel>
            <IonButton slot='end' routerLink='/contacts/koleri6_1'>Tenant</IonButton>
          </IonItem>
        
          <IonItem>
            <IonAvatar slot='start'>
              <img src="https://kv.img-bcg.eu/image/object/34/9027/31649027.jpg" />
            </IonAvatar>
            <IonLabel>
              <h1>Köleri 6-5</h1>
              <h3>Sqr: 49 m2</h3>
              <h3>Rent: 550 € per month</h3>
              <p>Needs renovation</p>
            </IonLabel>
            <IonButton slot='end' routerLink='/contacts/koleri6_5'>Tenant</IonButton>
          </IonItem>
          <IonItem>
            <IonAvatar slot='start'>
              <img src="https://kv.img-bcg.eu/image/object/34/9027/31649027.jpg" />
            </IonAvatar>
            <IonLabel>
              <h1>Köleri 6-7</h1>
              <h3>Sqr: 51 m2</h3>
              <h3>Rent: 600 € per month</h3>
            </IonLabel>
            <IonButton slot='end' routerLink='/contacts/koleri6_7'>Tenant</IonButton>
          </IonItem>
          <IonItem>
            <IonAvatar slot='start'>
              <img src="https://kv.img-bcg.eu/image/object/35/1886/52631886.jpg" />
            </IonAvatar>
            <IonLabel>
              <h1>Tammsaare 11-2</h1>
              <h3>55 m2</h3>
              <p>Needs renovation, not renting out</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot='start'>
              <img src="https://kv.img-bcg.eu/image/object/35/1886/52631886.jpg" />
            </IonAvatar>
            <IonLabel>
              <h1>Tammsaare 11-7</h1>
              <h3>62 m2</h3>
              <p>Water issues, not renting out</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonItem  lines="none">
          <IonButton slot='end' routerLink='/apartment-contacts'>All Contacts</IonButton>
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Apartments;
