import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>
        <IonList>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/28.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Sybil Stout</h2>
                <h3>Electrician</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Steve Charles</h2>
                <h3>Electrician</h3>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Hollis Herrera</h3>
                <p>Electrician</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/6.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Bernardo Soto</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding slot="end">
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/7.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Hugo Barnett</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/28.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Sybil Stout</h2>
                <h3>Electrician</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Steve Charles</h2>
                <h3>Electrician</h3>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Hollis Herrera</h3>
                <p>Electrician</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/6.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Bernardo Soto</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding slot="end">
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/7.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Hugo Barnett</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/28.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Sybil Stout</h2>
                <h3>Electrician</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Steve Charles</h2>
                <h3>Electrician</h3>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Hollis Herrera</h3>
                <p>Electrician</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/6.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Bernardo Soto</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding slot="end">
            <IonItem button={true}>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://randomuser.me/api/portraits/men/7.jpg"
                />
              </IonAvatar>
              <IonLabel>
                <h3>Hugo Barnett</h3>
                <p>masked****@email.com</p>
                <p>+971-5*******</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
