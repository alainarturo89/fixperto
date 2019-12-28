import {
    IonContent, IonLabel, IonImg, IonSegment, IonGrid, IonRow, IonCol, IonCard, IonPage
} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <IonPage>
            <Header cHeader="tertiary" cNotificacion="light" />
            <IonContent color="tertiary">
                <IonSegment>
                    <IonLabel class="ion-margin"><h2>Todo lo que necesitas en arreglos para tu
                                 casa, oficina y trabajo en un sólo lugar.</h2>
                    </IonLabel>
                </IonSegment>
                <IonSegment class="ion-margin-top"> </IonSegment>
                <IonSegment>
                    <IonLabel><h2>¡Hola!¿Cuéntanos quien eres?</h2></IonLabel>
                </IonSegment>
                <IonSegment class="ion-margin-top">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonLabel>
                                    <h2>¿Necesitas un servicio?</h2>
                                </IonLabel>
                                <IonCard>
                                    <IonImg src="assets/img/1.jpg" />
                                </IonCard>
                                <IonLabel color="secondary">
                                    <h2>Eres Cliente</h2>
                                </IonLabel>
                            </IonCol>
                            <IonCol>
                                <IonLabel>
                                    <h2>¿Quieres ofrecer un servicio?</h2>
                                </IonLabel>
                                <IonCard routerLink="/registro_inicial" >
                                    <IonImg src="../assets/img/2.jpg" />
                                </IonCard>
                                <IonLabel color="secondary">
                                    <h2>Eres Profesional</h2>
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonSegment>
            </IonContent>
        </IonPage>
    );
};
export default Home;
