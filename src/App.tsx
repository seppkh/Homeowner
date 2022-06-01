import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import ApartmentContacts from './pages/ApartmentContacts';
import Apartments from './pages/Apartments';

import { newspaper, list, people, statsChart} from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllBills from './pages/Invoices';
import Metrics from './pages/Metrics';
import Contacts from './pages/Contacts';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/apartments">
            <Apartments />
          </Route>
          <Route exact path="/apartment-contacts">
            <ApartmentContacts />
          </Route>
          <Route exact path="/contacts/koleri6_1">
            <Contacts aptCode="koleri6_1" />
          </Route>
          <Route exact path="/contacts/koleri6_5">
            <Contacts aptCode="koleri6_5" />
          </Route>
          <Route exact path="/contacts/koleri6_7">
            <Contacts aptCode="koleri6_7"/>
          </Route>
          <Route exact path="/contacts/tammsaare11_2">
            <Contacts aptCode="tammsaare11_2" />
          </Route>
          <Route exact path="/contacts/tammsaare11_7">
            <Contacts aptCode="tammsaare11_7"/>
          </Route>
          <Route exact path="/metrics">
            <Metrics />
          </Route>
          <Route exact path="/invoices">
            <AllBills />
          </Route>

          <Route exact path="/">
            <Redirect to="/apartments" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='apartments' href='/apartments'>
            <IonIcon icon={list}></IonIcon>
            <IonLabel>Apartments</IonLabel>
          </IonTabButton>
          <IonTabButton tab='apartment-contacts' href='/apartment-contacts'>
            <IonIcon icon={people}></IonIcon>
            <IonLabel>Contacts</IonLabel>
          </IonTabButton>
          <IonTabButton tab='metrics' href='/metrics'>
            <IonIcon icon={statsChart} ></IonIcon>
            <IonLabel>Metrics</IonLabel>
          </IonTabButton>
          <IonTabButton tab='invoices' href='/invoices'>
            <IonIcon icon={newspaper}></IonIcon>
            <IonLabel>Invoices</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
