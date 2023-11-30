import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react';

interface ReceitasDetailModalProps {
  itemSelected: Recipe | null;
  onClose: (feito : boolean, id: number) => void;
}

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    image: string;
}

const ReceitasDetailModal: React.FC<ReceitasDetailModalProps> = ({ itemSelected, onClose }) => {
  return (
    <IonModal isOpen={itemSelected !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{itemSelected?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onClose(false, itemSelected!.id)}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{itemSelected?.instructions}</p>
        <IonImg
                src={itemSelected?.image}
                alt="Receita"
        />
        <IonButton onClick={() => onClose(true, itemSelected!.id)}>Receita feita</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default ReceitasDetailModal;