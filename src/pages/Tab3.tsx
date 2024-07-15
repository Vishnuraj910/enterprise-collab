import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Updates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Updates</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonCard>
            <img
              alt="Silhouette of mountains"
              src="../../assets/img/banner.jpg"
            />
            <IonCardHeader>
              <IonCardTitle>Steve Charles</IonCardTitle>
              <IonCardSubtitle>
                Celebrating Birthday on 20-July-2024
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Optional notes if any</IonCardContent>
          </IonCard>
          <IonCard>
            <img
              alt="Silhouette of mountains"
              src="../../assets/img/banner 2.png"
            />
            <IonCardHeader>
              <IonCardTitle>Issac Mills</IonCardTitle>
              <IonCardSubtitle>
                Celebrating Wedding Anniversary on 08-Aug-2024
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Optional notes if any</IonCardContent>
          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
