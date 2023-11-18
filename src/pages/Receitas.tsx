import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";

import { getInboxItems } from '../Utils/Utils';
import ReceitasDetailModal from './ReceitasDetailModal';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  prepTime: string;
  cookTime: string;
  servings: number;
}

const Receitas: React.FC = () => {

  const [ Badge, setBadge ] = useState(true);
  const [itemSelected, setItemSelected] = useState<Recipe| null>(null);

  const inboxItems = getInboxItems();

  const handleClickReceita = async (item : Recipe) => {
    setItemSelected(item)
	}

  const handleCloseModal = () => {
    setItemSelected(null);
  };

  return (
    <IonPage>
      <IonHeader translucent={ true }>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Receitas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">fdfd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        { inboxItems.map((item, index) => {

            return (
              <IonItem onClick={() => handleClickReceita(item)} key={ `item_${ index }`} detail={ true } lines="full" detailIcon={ checkmark }>
                <IonLabel>
                  <h2>{ item.name }</h2>
                  <h4>{ item.prepTime }</h4>
                  <p>{ item.instructions }</p>
                </IonLabel>
                { Badge &&
                  <IonBadge slot="end" style={{ fontSize: "0.7rem" }}>
                    {`${item.servings} Pessoas`}
                  </IonBadge>
                }

                { !Badge &&
                  <IonNote slot="end" style={{ fontSize: "0.9rem" }}>
                    {`${item.servings} Pessoas`}
                  </IonNote>
                }
              </IonItem>
            );
            })}
        </IonList>
      </IonContent>

      <ReceitasDetailModal itemSelected={itemSelected} onClose={handleCloseModal} />
    </IonPage>
  );
};

export default Receitas;
