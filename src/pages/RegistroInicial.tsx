import {
    IonContent, IonLabel, IonSegment, IonPage, IonButtons,
    IonBackButton, IonItem, IonInput, IonCheckbox, IonList, IonButton
} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';

const RegistroInicial: React.FC = () => {
    return (
        <IonPage>
            <Header cHeader="tertiary" cNotificacion="light" />
            <IonContent color="tertiary">
                <IonButtons>
                    <IonBackButton defaultHref="/"></IonBackButton>
                </IonButtons>
                <IonSegment>
                    <IonLabel>
                        <h1>¡Hola!</h1>
                    </IonLabel>
                </IonSegment>
                <IonSegment>
                    <IonLabel class="ion-margin"><h2>Eres muy importante para nosotros,
                                                     regálanos tus datos de contacto.</h2>
                    </IonLabel>
                </IonSegment>
                <IonSegment>
                    <form>
                        <IonList lines="full" class="ion-no-margin ion-no-padding">
                            <IonItem color="tertiary">
                                <IonLabel position="floating">Nombre</IonLabel>
                                <IonInput required type="text"></IonInput>
                            </IonItem>
                            <IonItem color="tertiary">
                                <IonLabel position="floating">Correo Electrónico</IonLabel>
                                <IonInput required type="text"></IonInput>
                            </IonItem>
                            <IonItem color="tertiary">
                                <IonLabel position="floating">Contraseña</IonLabel>
                                <IonInput required type="text"></IonInput>
                            </IonItem>
                            <IonItem color="tertiary">
                                <IonLabel position="floating">Repetir Contraseña</IonLabel>
                                <IonInput required type="text"></IonInput>
                            </IonItem>
                        </IonList>
                    </form>
                </IonSegment>
                <IonSegment class="ion-margin-top">
                    <IonLabel class="ion-margin-end">
                        <IonCheckbox class="ion-margin-start ion-margin-end" color="primary" slot="start"></IonCheckbox>
                        Haciendo click en esta casilla, estoy aceptando
                                    <br />
                        <h2>Términos y Condiciones</h2>
                    </IonLabel>
                </IonSegment>
                <section>
                    <IonButton class="ion-margin" expand="block" disabled={true}>Continuar</IonButton>
                </section>
            </IonContent>
        </IonPage>
    );
};
export default RegistroInicial;
