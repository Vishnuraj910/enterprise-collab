import {
  IonAvatar,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import Moment from "react-moment";
import moment from "moment";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Leads</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Leads</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://randomuser.me/api/portraits/men/56.jpg"
            />
          </IonAvatar>
          <IonLabel>
            <h3>
              Bernardo Soto
              <IonChip class="float-right">
                {moment("2024-07-14T00:00:00").fromNow()}
              </IonChip>
            </h3>
            <p>HVAC Supplier</p>
            <p>masked****@email.com</p>
            <p>+971-5*******</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://randomuser.me/api/portraits/men/46.jpg"
            />
          </IonAvatar>
          <IonLabel>
            <h3>
              Hugo Barnett
              <IonChip class="float-right">
                {moment("2024-07-10T00:00:00").fromNow()}
              </IonChip>
            </h3>
            <p>HVAC Supplier</p>
            <p>masked****@email.com</p>
            <p>+971-5*******</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://randomuser.me/api/portraits/men/63.jpg"
            />
          </IonAvatar>
          <IonLabel>
            <h3>
              Hollis Herrera
              <IonChip class="float-right">
                {moment("2024-06-14T00:00:00").fromNow()}
              </IonChip>
            </h3>
            <p>HVAC Supplier</p>
            <p>masked****@email.com</p>
            <p>+971-5*******</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://randomuser.me/api/portraits/men/67.jpg"
            />
          </IonAvatar>
          <IonLabel>
            <h3>
              Bernardo Soto
              <IonChip class="float-right">
                {moment("2024-05-14T00:00:00").fromNow()}
              </IonChip>
            </h3>
            <p>HVAC Supplier</p>
            <p>masked****@email.com</p>
            <p>+971-5*******</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
