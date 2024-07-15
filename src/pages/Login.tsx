import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonIcon,
  IonText,
  IonItem,
  IonLabel,
  IonCard,
} from "@ionic/react";
import { logInOutline, personOutline, lockClosedOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Login attempt with:", username, password);
    // After successful login:
    history.push("/tabs");
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="login-container">
          <IonCard>
            <h1 className="login-title">Welcome</h1>
            <form onSubmit={handleLogin}>
              <IonItem>
                <IonIcon icon={personOutline} slot="start" />
                <IonInput
                  label="Username"
                  labelPlacement="floating"
                  placeholder="Enter username"
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={lockClosedOutline} slot="start" />

                <IonInput
                  label="Password"
                  labelPlacement="floating"
                  placeholder="Enter password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonButton expand="block" type="submit" className="login-button">
                Sign In
              </IonButton>
            </form>
            <div className="forgot-password">
              <IonText color="medium">Forgot password?</IonText>
            </div>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
