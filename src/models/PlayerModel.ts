import { CardModel } from "./CardModel";
import { ColonyModel } from "./ColonyModel";
import { Color } from "../Color";
import { VictoryPointsBreakdown } from "../VictoryPointsBreakdown";
import { ITagCount } from '../ITagCount';
import { TurmoilModel } from "./TurmoilModel";
import { IProjectCard } from '../cards/IProjectCard';
import { CorporationCard } from '../cards/corporation/CorporationCard';

export interface PlayerModel {
    boardName: string;
    corporationCard: string;
    corporationCardResources: number;
    playedCards: Array<CardModel>;
    cardsInHandNbr: number;
    colonies: Array<ColonyModel>;
    color: Color;
    energy: number;
    energyProduction: number;
    gameAge: number;
    heat: number;
    heatProduction: number;
    id: string;
    isActive: boolean;
    isSoloModeWin: boolean;
    megaCredits: number;
    megaCreditProduction: number;
    name: string;
    plants: number;
    plantProduction: number;
    steel: number;
    steelProduction: number;
    steelValue: number;
    terraformRating: number;
    titanium: number;
    titaniumProduction: number;
    titaniumValue: number;
    turmoil: TurmoilModel | undefined;
    venusNextExtension: boolean;
    venusScaleLevel: number;
    victoryPointsBreakdown: VictoryPointsBreakdown;
    tags: Array<ITagCount>;
    showOtherPlayersVP: boolean;
    actionsThisGeneration: Array<string>;
    fleetSize: number;
    tradesThisTurn: number;
    selfReplicatingRobotsCardCost: number;
    selfReplicatingRobotsCardTarget: IProjectCard | undefined;
    dealtCorporationCards: Array<CorporationCard>;
    dealtPreludeCards:  Array<IProjectCard>;
    initialDraft: boolean;
    deckSize: number;
}
