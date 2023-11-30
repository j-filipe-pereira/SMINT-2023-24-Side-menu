import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonFooter, IonCardHeader, IonCard, IonCardContent, IonInput } from '@ionic/react';
import { useEffect, useState } from "react";


const IMC: React.FC = () => {
  const [peso, setPeso] = useState<number | ''>('');
  const [altura, setAltura] = useState<number | ''>('');
  const [imc, setIMC] = useState<number | null>(null);
  const [estado, setEstado] = useState<string>('');

  useEffect(() => {
    if (!isNaN(Number(peso)) && !isNaN(Number(altura))) {
      const alturaMetros = Number(altura) / 100;
      const novoIMC = Number(peso) / (alturaMetros * alturaMetros);
      setIMC(novoIMC);
    } else {
      setIMC(null);
    }
  }, [peso, altura]);

  const calcularEstado = () => {
    if(imc! < 18.5){
      setEstado("Abaixo do peso");
    }else if(imc! > 18.5 && imc! < 24.9){
      setEstado("Normal");
    }else if(imc! > 24.9 && imc! < 29.9){
      setEstado("Sobrepeso");
    }else{
      setEstado("Obesidade");
    }
  };

  const resetarValores = () => {
    setPeso('');
    setAltura('');
    setIMC(null);
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>IMC</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className="ion-padding-vertical ion-margin-vertical">
          <IonItem>
            <IonLabel>Peso (kg)</IonLabel>
            <IonInput
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Altura (cm)</IonLabel>
            <IonInput
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton
          className="ion-padding-top ion-margin-top"
          expand="block"
          onClick={calcularEstado}
        >
          Calcular Estado
        </IonButton>
        <IonButton
          className="ion-padding-bottom ion-margin-bottom"
          expand="block"
          onClick={resetarValores}
        >
          Reset
        </IonButton>

        <IonCard className="ion-padding-vertical ion-margin-vertical">
          <IonCardHeader>Calculo IMC</IonCardHeader>
          <IonCardContent>
            <p>Dados: {peso} kg, {altura} cm</p>
            <p>IMC: {imc !== null ? imc.toFixed(2) : 'N/A'}</p>
            <p>
              <strong>Estado: {estado} </strong>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Developed by Filipe Pereira</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default IMC;
