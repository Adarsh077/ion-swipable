import React, { Fragment, useState } from 'react';
import {
  IonApp,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonLabel,
  IonItem,
} from '@ionic/react';

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
import './theme/styles.css'
import Swipe from './Components/Swip';

const App: React.FC = () => {
  return <Fragment>
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-no-padding">
        <IonItem lines="none" className='ion-no-padding card-container'>
          <IonLabel className="card-placeholder"></IonLabel>
          <Swipe>

            <IonLabel>
              Hello
              </IonLabel>
          </Swipe>
        </IonItem>
      </IonContent>
    </IonApp>
  </Fragment>
};

export default App;
