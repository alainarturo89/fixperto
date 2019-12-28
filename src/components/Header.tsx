import { IonHeader, IonIcon, IonToolbar, IonTitle } from '@ionic/react';
import { notifications } from 'ionicons/icons';
import React from 'react';
const Header: React.FunctionComponent<{
    cHeader: string;
    cNotificacion: string;
}> = (props) => {
   
    return (
        <IonHeader>
            <IonToolbar color={props.cHeader}>
                <IonIcon slot="end" class="ion-margin-top" color={props.cNotificacion} icon={notifications} />
                <IonTitle class="ion-text-center ion-margin-top">Fixperto</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;